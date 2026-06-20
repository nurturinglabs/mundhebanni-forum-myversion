const discourseBaseUrl = "https://mundebanni-community.discourse.group";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.status(405).json({ error: "Discourse proxy is read-only until SSO is configured." });
    return;
  }

  const path = Array.isArray(request.query.path) ? request.query.path.join("/") : request.query.path;
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

  try {
    const upstream = await fetch(`${discourseBaseUrl}/${path}${query.size ? `?${query}` : ""}`, { headers });
    const body = await upstream.text();
    response.status(upstream.status);
    response.setHeader("content-type", upstream.headers.get("content-type") || "application/json");
    response.setHeader("cache-control", "s-maxage=60, stale-while-revalidate=300");
    response.send(body);
  } catch {
    response.status(502).json({ error: "Unable to reach Discourse." });
  }
}
