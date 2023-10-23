const express = require("express");

const app = express();

app.use(express.json());

app.get("/samples", (req, res) => {
  res.json({ id: "id" });
});

app.post("/samples", (req, res) => {
  res.json({ id: "id" });
});

const initialize = () => {
  return app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

module.exports = initialize;
