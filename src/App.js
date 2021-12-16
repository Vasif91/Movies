import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Movies from "./components/movies";
import Series from "./components/series";
import TvShows from "./components/tv-shows";
import Play from "./components/play";
import Search from "./components/search";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      movies: [],
      result: [],
      searchRes: [],
      searchTerm: "",
      search: false
    };
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref().child("movies");
    itemsRef.on(
      "value",
      (snap) => {
        this.setState({
          isLoaded: true,
          items: snap.val()
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );

    const moviesRef = firebase.database().ref().child("movies");
    moviesRef.on(
      "value",
      (snap) => {
        this.setState({
          isLoaded: true,
          movies: snap.val()
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  handleSearchTermChange(searchTerm) {
    this.setState({ searchTerm, search: false });
  }

  handleSearchTermSubmit() {
    const re = new RegExp(this.state.searchTerm, "i");
    const all = [...this.state.items, ...this.state.movies];
    const unique = Array.from(new Set(all.map((a) => a.id))).map((id) => {
      return all.find((a) => a.id === id);
    });
    const items = unique.filter((item) => re.test(item.title));
    this.setState({ searchRes: items, search: true });
  }

  onSelect = (itemID) => {
    const resultRef = [...this.state.items, ...this.state.movies];
    const unique = Array.from(new Set(resultRef.map((a) => a.id))).map((id) => {
      return resultRef.find((a) => a.id === id);
    });
    const itemRef = unique.filter((i) => i.id === itemID);
    this.setState({
      result: itemRef
    });
  };

  render() {
    const { items, error, isLoaded, movies, result, searchRes } = this.state;
    return (
      <Router>
        <Navbar
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.handleSearchTermChange}
          onSearchTermSubmit={this.handleSearchTermSubmit}
        />
        <Switch>
          <Home
            path="/"
            exact
            component={Home}
            error={error}
            isLoaded={isLoaded}
            items={items}
            onSelect={this.onSelect}
          />
          <Movies
            path="/movies"
            component={Movies}
            error={error}
            isLoaded={isLoaded}
            movies={movies}
            onSelect={this.onSelect}
          />
          <Route path="/series" component={Series} />
          <Route path="/tv-shows" component={TvShows} />
          <Play
            path="/play/:id"
            component={Play}
            error={error}
            isLoaded={isLoaded}
            result={result}
          />
          <Search
            path={`/search/${this.state.searchTerm}`}
            component={Search}
            error={error}
            isLoaded={isLoaded}
            searchRes={searchRes}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
