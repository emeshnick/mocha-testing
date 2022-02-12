import React from "react";
import {
  Container,
  Figure,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getPopular } from "../store/data";
import { searchStar } from "../store/singleStar";

// Styles for homepage
const styles = {
  mainContainer: {
    paddingTop: "5rem",
  },
  starImage: {
    height: "5rem",
    width: "4rem",
    borderRadius: "10%",
    objectFit: "cover",
    objectPosition: "0 0",
  },
  starFigure: {
    padding: "0 0.25rem 0.25rem",
  },
};

/*
 * Home component with search input
 * Displays current popular searches
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  // Get popular searches after the component mounts
  componentDidMount() {
    this.props.getPopular();
  }

  // Changes state as input changes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // Search function on input
  search(evt) {
    evt.preventDefault();

    this.props.searchStar(this.state.searchInput);

    this.setState({ searchInput: "" });
  }

  render() {
    return (
      <Container style={styles.mainContainer} className="text-center">
        <h1>Home</h1>
        <InputGroup className="mb-3">
          <FormControl
            name="searchInput"
            value={this.state.inputName}
            onChange={this.handleChange}
            placeholder="Enter Name"
            aria-label="Star to search"
            aria-describedby="basic-addon2"
          />
          <Button
            onClick={this.search}
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>

        {this.props.popularPeople && (
          <Container>
            <h3>Trending Searches</h3>
            {this.props.popularPeople.slice(0, 4).map((star) => {
              console.log(star.profile_path);
              return (
                <Figure key={star.id} style={styles.starFigure}>
                  <Figure.Image
                    style={styles.starImage}
                    alt={`Profile image of ${star.name}`}
                    src={`https://image.tmdb.org/t/p/w200/${star.profile_path}`}
                  />
                  <Figure.Caption className="text-center">
                    {star.name}
                  </Figure.Caption>
                </Figure>
              );
            })}
          </Container>
        )}
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    popularPeople: state.data.popularPeople,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPopular: () => dispatch(getPopular()),
    searchStar: (starName) => dispatch(searchStar(starName)),
  };
};

export default connect(mapState, mapDispatch)(Home);
