import path from "path";
import { createServer } from "./index";
import * as express from "express";

const app = createServer();
const port = process.env.PORT || 3000;


// In production, serve the built static files from 'public' directory
const __dirname = import.meta.dirname;
const publicPath = path.join(__dirname, "../dist/spa");

// Serve static files
app.use(express.static(publicPath));

// Handle React Router - serve index.html for all non-API routes using app.use to avoid path-to-regexp issues
app.use((req, res, next) => {
  // Only handle GET requests
  if (req.method !== 'GET') return next();
  // Don't serve index.html for API routes
  if (req.path.startsWith('/api/') || req.path.startsWith('/health')) return next();
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
