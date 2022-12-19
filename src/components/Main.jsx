import React, { useState } from 'react'
import axios from 'axios'

//api
const api = 'https://www.omdbapi.com/?'

//api key
const apiKey = 'apikey=8caf4002'

const Main = () => {
  const [name, setName] = useState('')
  const [movies, setMovies] = useState([])
  const [seriesType, setSeriesType] = useState(null)
  const [moviesType, setMoviesType] = useState(null)
  const [loading, setLoading] = useState(false)

  //get response from API
  const getInfo = () => {
    setLoading(true)
    axios
      .get(api + apiKey + `&s=${name}` + '&page=1')
      .then(res => {
        if (!res.status == 200) throw new Error()
        setMovies(res.data.Search)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        alert(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const filterSeries = () => {
    if (!movies) return
    const ser = movies.filter(mov => mov.Type === 'series')
    setSeriesType(ser)
    console.log(movies)
    console.log(ser)
  }

  const filterMovies = () => {
    if (!movies) return
    const mov = movies.filter(mov => mov.Type === 'movie')
    setMoviesType(mov)
    console.log(movies)
    console.log(mov)
  }

  //submit the title entered
  const handleSubmit = e => {
    e.preventDefault()
    setName('')
    getInfo()
    filterMovies()
    filterSeries()
    setLoading(true)
  }

  return (
    <div data-testId="main-1" className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="searchBar">
          <label htmlFor="search" className="search-label">
            Search
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="search"
            onChange={e => setName(e.target.value)}
          />
        </div>
      </form>
      {loading && <div>Loading...</div>}
      {moviesType ? (
        <div>
          <h3 className="category">Movies</h3>
          <div className="movies-container">
            {moviesType.map(movie => (
              <div key={movie.imdbID} className="movie-card">
                <div className="movie-title">
                  <p>{movie.Title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {seriesType ? (
        <div>
          <h3 className="category">Series</h3>
          <div className="series-container">
            {seriesType.map(ser => (
              <div key={ser.imdbID} className="movie-card">
                <div className="movie-title">
                  <p>{ser.Title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Main
