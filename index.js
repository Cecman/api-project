const express = require("express");
const genres = require("./movies");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.post("/api/genres", (req, res) => {
    
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
