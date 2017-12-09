import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Film.scss";
import * as $ from "jquery";

class Film extends React.Component {
  constructor() {
    super();
    this.state = {
      film: {
        title: "",
        images: {
          poster: "",
          backdrop: ""
        },
        plot: "",
        directors: [],
        writers: [],
        genres: [],
        rated: "",
        bechdelResults: {
          pass: "false",
          bechdelScore: 0,
          numScenesPass: 0,
          scenesThatPass: [],
          numScenesDontPass: 0,
          numOfFemalesChars: 0,
          numOfMaleChars: 0,
          numOfFemalesCharsWithDialogue: 0,
          numOfMaleCharsWithDialogue: 0,
          totalLinesFemaleDialogue: 0,
          totalLinesMaleDialogue: 0
        }
      }
    };
    this.getFilm = this.getFilm.bind(this);
  }

  getFilm() {
    $.ajax({
      url: "/api/film/" + this.props.params.id,
      method: "GET",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ film: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.getFilm();
  }

  render() {
    const directorNode = this.state.film.directors.map(director => {
      const directors = this.state.film.directors;
      if (director.name === directors[directors.length - 1].name) {
        return <span key={director.id}>{director.name}</span>;
      }
      return <span key={director.id}>{director.name} & </span>;
    });
    const writerNode = this.state.film.writers.map(writer => {
      const writers = this.state.film.writers;
      if (writer.name !== writers[writers.length - 1].name) {
        return <span key={writer.id}>{writer.name} & </span>;
      } else {
        return <span key={writer.id}>{writer.name}</span>;
      }
    });
    const genreNode = this.state.film.genres.map(genre => {
      const genres = this.state.film.genres;
      if (genre !== genres[genres.length - 1]) {
        return <span key={Math.floor(Math.random() * 100)}>{genre} | </span>;
      } else {
        return <span key={Math.floor(Math.random() * 100)}>{genre}</span>;
      }
    });
    return (
      <div className={styles.filmInfo}>
        <h1>{this.state.film.title}</h1>
        <h3>
          Bechdel Pass:{" "}
          {this.state.film.bechdelResults.pass.toString().toUpperCase()}
        </h3>
        <p>Bechdel Score: {this.state.film.bechdelResults.bechdelScore} of 3</p>
        <img
          src={this.state.film.images.backdrop}
          alt={this.state.film.title}
        />
        <div className="plot">
          <p>{this.state.film.plot}</p>
        </div>
        <span className={styles.results}>
          <div className={styles.filmData}>
            <span className={styles.catName}>Directors:</span> {directorNode}
            <br />
            <span className={styles.catName}>Writers:</span> {writerNode} <br />
            <span className={styles.catName}>Genre:</span> {genreNode}
            <br />
            <span className={styles.catName}>Rated:</span>{" "}
            {this.state.film.rated}
            <br />
            <span className={styles.catName}>IMDB:</span>{" "}
            <a
              href={`http://www.imdb.com/title/${this.state.film.idIMDB}`}
              target="_blank"
            >
              {this.state.film.title}
            </a>
            <br />
          </div>
          <div className="bechdelResults">
            <span className={styles.catName}>Bechdel Score:</span>{" "}
            {this.state.film.bechdelResults.bechdelScore} of 3<br />
            <span className={styles.catName}>
              Number of Scenes that pass:
            </span>{" "}
            {this.state.film.bechdelResults.numScenesPass}
            <br />
            <span className={styles.catName}>
              Number of Scenes that dont pass:
            </span>{" "}
            {this.state.film.bechdelResults.numScenesDontPass}
            <br />
            <span className={styles.catName}>
              Number Of Females Characters:
            </span>{" "}
            {this.state.film.bechdelResults.numOfFemalesChars}
            <br />
            <span className={styles.catName}>
              Number Of Male Characters:
            </span>{" "}
            {this.state.film.bechdelResults.numOfMaleChars}
            <br />
            <span className={styles.catName}>
              Number of Females Characters With Dialogue:
            </span>{" "}
            {this.state.film.bechdelResults.numOfFemalesCharsWithDialogue}
            <br />
            <span className={styles.catName}>
              Number of Male Characters With Dialogue:
            </span>{" "}
            {this.state.film.bechdelResults.numOfMaleCharsWithDialogue}
            <br />
            <span className={styles.catName}>
              Total Lines of Female Dialogue:
            </span>{" "}
            {this.state.film.bechdelResults.totalLinesFemaleDialogue}
            <br />
            <span className={styles.catName}>
              Total Lines of Male Dialogue:
            </span>{" "}
            {this.state.film.bechdelResults.totalLinesMaleDialogue}
            <br />
          </div>
        </span>
        <Link to={"/"}>
          <button>All Films</button>
        </Link>
      </div>
    );
  }
}

Film.propTypes = {
  film: PropTypes.object
};

export default Film;
