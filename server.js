import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 3000);
const root = process.cwd();
const discourseBaseUrl = "https://mundebanni-community.discourse.group";
const hasDist = await stat(join(root, "dist")).then(() => true, () => false);
const serveRoot = hasDist ? join(root, "dist") : root;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://localhost:${port}`);
  const urlPath = decodeURIComponent(requestUrl.pathname);

  if (urlPath.startsWith("/api/discourse/")) {
    if (request.method !== "GET") {
      response.writeHead(405, { "content-type": "application/json" });
      response.end(JSON.stringify({ error: "Discourse proxy is read-only until SSO is configured." }));
      return;
    }

    const discoursePath = urlPath.replace(/^\/api\/discourse\//, "");
    const targetUrl = `${discourseBaseUrl}/${discoursePath}${requestUrl.search}`;
    const headers = { accept: "application/json" };
    if (process.env.DISCOURSE_API_KEY) {
      headers["Api-Key"] = process.env.DISCOURSE_API_KEY;
      headers["Api-Username"] = process.env.DISCOURSE_API_USERNAME || "system";
    }

    try {
      const upstream = await fetch(targetUrl, { headers });
      const body = await upstream.text();
      response.writeHead(upstream.status, {
        "content-type": upstream.headers.get("content-type") || "application/json",
        "cache-control": "s-maxage=60, stale-while-revalidate=300"
      });
      response.end(body);
    } catch {
      response.writeHead(502, { "content-type": "application/json" });
      response.end(JSON.stringify({ error: "Unable to reach Discourse." }));
    }
    return;
  }

  const relativePath = urlPath === "/" ? "index.html" : urlPath.replace(/^\/assets\//, hasDist ? "/assets/" : "/public/assets/");
  const filePath = normalize(join(serveRoot, relativePath));

  if (!filePath.startsWith(serveRoot)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const targetPath = extname(filePath) ? filePath : join(serveRoot, "index.html");
    const file = await readFile(targetPath);
    response.writeHead(200, { "content-type": types[extname(targetPath)] || "application/octet-stream" });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, () => {
  console.log(`Mundhe Banni preview running at http://localhost:${port}`);
});
