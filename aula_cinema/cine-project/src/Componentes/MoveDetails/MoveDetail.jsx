import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState([])
    

    useEffect(() =>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d536b17f4c1532d249318d58e6cb09c2`)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err))
        },[])

    return(
        <>
        <h1>Página do Filme</h1>
        <p>{movie.title}</p>
        </>
    )
}

export default MovieDetails;