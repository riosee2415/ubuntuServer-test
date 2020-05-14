const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen("5001", () => {
  console.log("SERVER START 5001");
});
