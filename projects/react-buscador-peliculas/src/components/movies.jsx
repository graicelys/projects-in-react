export function ListOfMovies ({ movies }) {
  return (
    <ul className="movies">
    {
      movies.map(movie => (
        <li className="movie" key={movie.id}>
          <h4>{movie.title}</h4>
          <p>{movie.year} </p>
          <img src={movie.poster} alt={movie.title} />

        </li>
      ))
    }
  </ul>

  )
}

export function NoMoviesList () {
  return(
    <p> No se encontro resultado. </p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return(
    hasMovies 
    ? <ListOfMovies movies={movies} /> 
    : <NoMoviesList />
  ) 
}