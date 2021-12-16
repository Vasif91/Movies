import React, { Component } from "react";

class Play extends Component {
  render() {
    const { error, isLoaded, result } = this.props;
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
        <div className="container">
          {result.map(item => (
            <div className="row mt-5" key={item.id}>
              <div className="card mb-3 mt-5">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <i icon="fas fa-play" />
                    <img
                      src={`https://image.tmdb.org/t/p/w500${
                        item.backdrop_path
                      }`}
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.overview}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {item.release_date}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="embed-responsive embed-responsive-16by9 mt-3 mb-5">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${item.tube}`}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default Play;
