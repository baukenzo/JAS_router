import {useEffect, useState} from "react";
import {Container} from "@mui/material";
// import SpacingGrid from "../components/Grid";

export function MoviesPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then((res) => res.json())
            .then((data) => {
                console.log(movies)
                setMovies(data.results)
            })

    }, [])

    return (
        <Container maxWidth="xl">
            <h1>Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <div className="wrapper">
                            <img width="292" height="440" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                            <div className="jenre" >Жанр {movie.genre_ids[0]}</div>
                            <div className="reiting" >reiting</div>
                            <div className="title" >{movie.title}</div>
                        </div> 
                    </li>
                ))}
            </ul>
        </Container>
    )
}