import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  mainContainer: {
    padding: "5rem",
  },
  header: {
    paddingBottom: "0.5rem",
  },
  signature: {
    marginTop: "2rem",
    fontWeight: "lighter",
  },
};
class About extends React.Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <h1 style={styles.header}>About Star Signs</h1>
        <p>
          Star Signs is leaning into two of the guiltiest of guilty pleasures:
          celebrities gossip and astrology. The ability to search for a
          celebrity and get a list of stars and their star signs can help add a
          dash of horoscope to your tabloids, or throw in some household names
          to your birth chart reading.
          <br></br>
          This app uses the TMDB api to search for actors. You can find out more
          about the api <a href="https://developers.themoviedb.org/3">here</a>.
        </p>
        <p style={styles.signature}>Created in 2022 by Elijah Meshnick</p>
      </Container>
    );
  }
}

export default About;
