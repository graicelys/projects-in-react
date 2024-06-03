import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'


function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirtInput = useRef(true)

  useEffect(() => {
    if (isFirtInput.current) {
      isFirtInput.current = search === ''
      return
    }

    if (search === '') {
     setError('No se puede buscar pelicula vacía.')
     return
    }
  
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar la pelicula por un número.')
      return
    }
  
    if (search.length < 3) {
      setError('La busqueda debe tener al menos tres caracteres.')
      return
    }
  
    setError(null)
     
  }, [search])

  return{ search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search)
      getMovies({ search })
    }, 500)
    , [getMovies]
  )

  
 const handleSubmit = (event) => {
  event.preventDefault()
  getMovies({ search }) 
 }

 const handleSort = () => {
  setSort(!sort)

 }

 const handleChange = (event) => {
  const newSearch = event.target.value
  updateSearch(newSearch)
  debouncedGetMovies(newSearch)
 }

 

  return (
    <div className='page'>

    <header>
    <h1> Buscar Peliculas </h1>
      <form className='form'  onSubmit={handleSubmit}> 
        <input onChange={handleChange} value={search} name='fields' type='text' placeholder='Avengers, Marvel ...'/>
        <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'> Buscar </button>
      </form>
      {error && <p style={{color: 'red' }}>{error}</p>}
    </header>

    <main>
    {
      loading ? <p> Cargando...</p> : <Movies movies={movies} />
    }
      
    </main>
    </div>
    
  )
}

export default App


