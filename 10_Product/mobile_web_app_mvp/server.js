const fs = require("fs");
const http = require("http");
const path = require("path");

const {
  APP_ROOT,
  handleAsk,
  handleLearning,
  handleBasis,
  handleHealth,
  handleUnlock
} = require("./api/_shared");

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "0.0.0.0";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

function sendStatic(res, file) {
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    res.writeHead(200, {
      "content-type": contentTypes[path.extname(file).toLowerCase()] || "application/octet-stream",
      "cache-control": "no-store"
    });
    res.end(data);
  });
}

function staticFileFromUrl(reqUrl) {
  const url = new URL(reqUrl, `http://${HOST}:${PORT}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  if (pathname.includes("..") || pathname.split("/").some((part) => part.startsWith("."))) {
    return null;
  }
  const file = path.resolve(APP_ROOT, pathname.slice(1));
  const root = path.resolve(APP_ROOT) + path.sep;
  if (!file.startsWith(root)) return null;
  return file;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${HOST}:${PORT}`);
  if (url.pathname === "/api/ask") return handleAsk(req, res);
  if (url.pathname === "/api/learning") return handleLearning(req, res);
  if (url.pathname === "/api/basis") return handleBasis(req, res);
  if (url.pathname === "/api/health") return handleHealth(req, res);
  if (url.pathname === "/api/unlock") return handleUnlock(req, res);

  const file = staticFileFromUrl(req.url);
  if (!file) {
    res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }
  sendStatic(res, file);
});

server.listen(PORT, HOST, () => {
  console.log(`ACI-OS mobile web app: http://127.0.0.1:${PORT}`);
});
