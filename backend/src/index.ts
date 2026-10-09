import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api", (_req, res) => {
  res.json({
    message: "Welcome to the MERN starter API",
    status: "ok",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
