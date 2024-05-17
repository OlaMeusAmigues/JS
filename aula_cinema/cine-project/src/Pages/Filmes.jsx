import { useEffect, useState } from 'react';
import MovieCard from '../Componentes/MovieCard/MovieCard';

function Filmes() {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=d536b17f4c1532d249318d58e6cb09c2')
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err))
        },[])

    return(
        <>
        <h1>Filmes</h1>
        <div>
            {movies.map((filme, index) =>(
                <MovieCard filme={filme} key={filme.id}/>
            ))}
        </div>
        </>
    )
}
export default Filmes