/* eslint strict: 0*/
'use strict';

const db = require('./index.js');
const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require("mongoose"));
mongoose.Promise = require('bluebird');

const filmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  plot: String,
  simplePlot: String,
  year: Number,
  releaseDate: String,
  actors: [{
    actorName: String,
    character: String,
    actorActress: String,
  }],
  directors: [{
    name: String,
    id: String,
  }],
  writers: [{
    name: String,
    id: String,
  }],
  rated: String,
  genres: [String],
  urlPoster: String,
  idIMDB: String,
  urlIMDB: String,
  rating: String,
  metascore: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  bechdelResults: {
    pass: Boolean,
    bechdelScore: Number,
    numScenesPass: Number,
    numScenesDontPass: Number,
    numOfFemalesChars: Number,
    numOfMaleChars: Number,
    numOfFemalesCharsWithDialogue: Number,
    numOfMaleCharsWithDialogue: Number,
    totalLinesFemaleDialogue: Number,
    totalLinesMaleDialogue: Number,
  },
  images: {
    backdrop: String,
    poster: String,
  },
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;