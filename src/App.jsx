import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [terminodeBusqueda, setTerminodeBusqueda] = React.useState('');

  // Hooks del API
  const [MensajeDeError, setMensajeDeError] = useState('');
  const [ListasDePeliculas, setListasDePeliculas] = useState([]);
  const [EstaCargando, setEstaCargando] = useState(false);

  const BuscarPeliculas = async (termino = '') => {
    setEstaCargando(true);
    setMensajeDeError('');
    try {
      const endpoint = termino
        ? `${API_URL}/search/movie?query=${encodeURIComponent(termino)}`
        : `${API_URL}/discover/movie?sort_by=popularity.desc`;


      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();

      if (!data.results) {
        setMensajeDeError(data.Error || 'No se encontraron películas.');
        setListasDePeliculas([]);
        return;
      }

      setListasDePeliculas(data.results || []);
    } catch (error) {
      console.error('Error al buscar películas:', error);
      setMensajeDeError(
        'Ocurrió un error al buscar las películas. Por favor, intenta nuevamente.'
      );
    } finally {
      setEstaCargando(false);
    }
  };

  useEffect(() => {
    BuscarPeliculas();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      BuscarPeliculas(terminodeBusqueda);
    }, 500);

    return () => clearTimeout(delay);
  }, [terminodeBusqueda]);

  return (
    <main>
      <div className='pattern'></div>
      <div className='wrapper'>
        <header>
          <Navbar
            terminodeBusqueda={terminodeBusqueda}
            setTerminodeBusqueda={setTerminodeBusqueda}
          />
          <img src="./heroes.png" alt="Icono de película" />
          <h1>
            Encuentra <span className='text-gradient'>Películas </span>
            sin complicaciones
          </h1>
          {/* <Search
            terminodeBusqueda={terminodeBusqueda}
            setTerminodeBusqueda={setTerminodeBusqueda}
          /> */}
        </header>
        <section className='all-movies'>
          <h2 className='mt-6'>Peliculas Populares</h2>

          {EstaCargando ? (
            <Spinner />
          ) : MensajeDeError ? (
            <p className='text-red-500'>{MensajeDeError}</p>
          ) : (
            <ul>
              {ListasDePeliculas.map((pelicula) => (
                <MovieCard key={pelicula.id} pelicula={pelicula} />
              ))}
            </ul>
          )}

        </section>
      </div>
    </main>
  )
}

export default App