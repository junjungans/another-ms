const express = require("express");

const app = express();

app.use(express.json());

app.get("/sample", (req, res) => {
  res.json({ id: "id" });
});

app.post("/sample", (req, res) => {
  res.json({ id: "id" });
});

const initialize = () => {
  return app.listen(3000, () => {
    "Server running on port 3000";
  });
};

module.exports = initialize;
