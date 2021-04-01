const express = require("express");
const {
  genresHandler,
  createGenreHandler,
  updateGenreHandler,
  deleteGenreHandler,
} = require("../handlers/handlers");
const router = express.Router();

router.get("/", genresHandler);
router.post("/", createGenreHandler);
router.put("/:genre", updateGenreHandler);
// router.patch();
router.delete("/:genre", deleteGenreHandler);

module.exports = router;
