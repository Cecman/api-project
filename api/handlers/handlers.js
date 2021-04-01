const express = require("express");
const Joi = require("joi");
let movies = require("../../data/movies");

const genres = movies.map((g) => g.genre);

const validateInput = (value) => {
  const schema = Joi.object({
    genre: Joi.string().min(3).required(),
  });
  return schema.validate(value);
};

const genresHandler = (req, res) => {
  res.status(200).json(genres);
};

const createGenreHandler = (req, res) => {
  const { error } = validateInput(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const newGenre = {
    id: movies.length + 1,
    genre: req.body.genre,
  };

  movies.push(newGenre);
  res.status(200).json(newGenre);
};

const updateGenreHandler = (req, res) => {
  const foundGenre = movies.find((g) => g.genre === req.params.genre);
  if (!foundGenre) {
    return res.status(404).send("No such genre found");
  }
  const { error } = validateInput(req.params);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  foundGenre.genre = req.body.genre;
  console.log(movies);
  res.status(200).json(foundGenre);
};

const deleteGenreHandler = (req, res) => {
  const foundGenre = movies.find((gen) => gen.genre === req.params.genre);
  if (!foundGenre) {
    return res.status(404).send("No such genre found");
  }
  const { error } = validateInput(req.params);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  movies = movies.filter((g) => g.genre !== foundGenre.genre);
  console.log(movies);
  res.status(200).json(foundGenre);
};
module.exports = {
  genresHandler,
  createGenreHandler,
  updateGenreHandler,
  deleteGenreHandler,
};
