import React, { Component } from "react";

class Search extends Component {
  render() {
    const { error, isLoaded, searchRes } = this.props;

    if (error) {
      return <div>error: {error.mesagge}</div>;
    } else if (!isLoaded) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border mt-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row m-0 mt-5 pt-5 justify-content-md-center">
          {searchRes.map(item => (
            <div className="col-md-2 card m-2" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>{item.title || item.name} </b>
                  <br />
                  <small className="text-muted">
                    IMDb: {item.vote_average}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default Search;
