const express = require("express");
const app = express();

// Use port 5002 to avoid conflicts on your Mac
const PORT = process.env.PORT || 5002;

app.get("/", (req, res) => {
  res.send("<h2>Hello from KVN DevOps Node API 👋</h2>");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`KVN Node API listening on port ${PORT}`);
});
