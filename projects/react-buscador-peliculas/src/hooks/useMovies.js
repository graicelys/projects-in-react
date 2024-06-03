import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // Es para guardar la busqueda anterior
  const previousSearch = useRef(search)
  
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
      
    try{
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
  
    }catch (e){
      setError(e.message)
    }finally{
      setLoading(false)
    }
      
  }, [])

  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
      : movies
    
  }, [sort, movies]) 



  return { movies: sortedMovies, getMovies, loading, error }
}
