import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 3000);
const root = process.cwd();
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
  const urlPath = decodeURIComponent(new URL(request.url || "/", `http://localhost:${port}`).pathname);
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
