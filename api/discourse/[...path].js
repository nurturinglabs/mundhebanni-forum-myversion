const discourseBaseUrl = "https://mundebanni-community.discourse.group";

export default async function handler(request, response) {
  if (!["GET", "POST"].includes(request.method)) {
    response.status(405).json({ error: "Unsupported Discourse proxy method." });
    return;
  }

  const path = Array.isArray(request.query.path) ? request.query.path.join("/") : request.query.path;
  if (request.method === "POST" && path !== "posts.json") {
    response.status(405).json({ error: "Only topic creation is enabled through this proxy." });
    return;
  }

  if (request.method === "POST" && !process.env.DISCOURSE_API_KEY) {
    response.status(500).json({ error: "Discourse API key is not configured." });
    return;
  }

  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(request.query)) {
    if (key === "path") continue;
    if (Array.isArray(value)) value.forEach((item) => query.append(key, item));
    else if (value !== undefined) query.set(key, value);
  }

  const headers = { accept: "application/json" };
  if (process.env.DISCOURSE_API_KEY) {
    headers["Api-Key"] = process.env.DISCOURSE_API_KEY;
    headers["Api-Username"] = process.env.DISCOURSE_API_USERNAME || "system";
  }
  if (request.method === "POST") {
    headers["content-type"] = "application/json";
  }

  try {
    const upstream = await fetch(`${discourseBaseUrl}/${path}${query.size ? `?${query}` : ""}`, {
      method: request.method,
      headers,
      body: request.method === "POST" ? JSON.stringify(request.body || {}) : undefined
    });
    const body = await upstream.text();
    response.status(upstream.status);
    response.setHeader("content-type", upstream.headers.get("content-type") || "application/json");
    if (request.method === "GET") {
      response.setHeader("cache-control", "s-maxage=60, stale-while-revalidate=300");
    }
    response.send(body);
  } catch {
    response.status(502).json({ error: "Unable to reach Discourse." });
  }
}
