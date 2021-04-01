const express = require("express");
const movies = require("./movies");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const genres = movies.map((movie) => movie.genre);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.post("/api/genres", (req, res) => {
  if (req.body.genre) {
    const newGenre = {
        id: genres.length + 1,
        genre: req.body.genre
    }
    genres.push(newGenre.genre)
    res.send(newGenre);
    console.log(genres);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
