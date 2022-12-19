import React from 'react'

const MovieList = props => {
  console.log(props.movies)
  return (
    <div className="container">
      <div className="movies">Movies</div>
      <div className="movies-container">
        {props.movies.map((movie, index) => {
          return (
            <div className="movie-card" key={index}>
              <div className="mask">
                <div className="movie-title">
                  <p className="text-white mb-0">{movie.Title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="series">Series</div>
      <div className="series-container">
        {props.movies.map((movie, index) => {
          const mov = movie.Type === 'series'
          return (
            <div className="movie-card" key={index}>
              <div className="mask">
                <div className="movie-title">
                  <p className="text-white mb-0">{mov.Title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MovieList
