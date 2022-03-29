import {useEffect, useState} from "react";
import {Container, Grid} from "@mui/material";
import {MovieItem} from "../components/MovieItem";

export function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })

    }, [])

    console.log('rendering search')
    // const onSearch = (e) => {
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=1&include_adult=false&query=${e.target.value}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setSearch(data.results)
    //         })
    // }

    const searchHandler = () => {
        if (!value) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
            return setValue('введите что то')
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=1&include_adult=false&query=${value}`)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results)
                })
    }


    return (
        <Container maxWidth="xl">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={searchHandler} >go serach</button>
            <p>стейт {value}</p>
            
            <h1>Movies</h1>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={12 / 5}>
                        <MovieItem  movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}