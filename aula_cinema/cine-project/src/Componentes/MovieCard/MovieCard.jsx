import { Link } from "react-router-dom";

function MovieCard({filme}) {
    console.log(filme.poster_path)
    return (
        <div className="movieCard">
            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}/>
            <p>{filme.title}</p>
            <Link to={`${filme.id}`}>Saber Mais</Link>
        </div>
    );
}

export default MovieCard;