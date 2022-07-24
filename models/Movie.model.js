const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  stars: [String],
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: [String],
});

const MovieModel = model("movie", movieSchema);

module.exports = MovieModel;
