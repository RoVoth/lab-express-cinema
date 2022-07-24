const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model.js");

/*pagina home */
router.get("/", (req, res, next) => res.render("index"));

/* pagina de movies */
router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .select()
    .then((response) => {
      console.log(response);
      res.render("movies.hbs", {
        moviesList: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* pagina de detalles de movies */
router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  MovieModel.findById(movieId)
    .then((response) => {
      console.log(response);
      res.render("movie-details.hbs", {
        movieDetails: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
