import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  handleSearchTermChange(event) {
    this.props.onSearchTermChange(event.target.value);
  }

  handleSearchTermSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermSubmit();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand js-scroll-trigger">Movies</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies">
                  <a className="nav-link">Movies</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/series">
                  <a className="nav-link">Series</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tv-shows">
                  <a className="nav-link">TV-Shows</a>
                </Link>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.handleSearchTermSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleSearchTermChange}
              />
              <Link to={`/search/${this.props.searchTerm}`}>
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  type="submit"
                  onClick={() => this.props.onSearchTermSubmit()}
                >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
