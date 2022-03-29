import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {styled} from "@mui/material";
import {getStartsByRating} from "../utils/getStartsByRating";
import {Container, Grid} from "@mui/material";
import { MovieItem } from "../components/MovieItem";

const Wrapper = styled('div')`
    width: 100%;
    height: 100%;
    background: #1D1D1D;
`

const InnerWrapper = styled('div')`
    width: 632px;
    height: 312px;
    /* margin-top: 25%;
    margin-left: 25%;
    margin-bottom: 20%; */
    position: absolute;
    left: 200px;
    bottom: 100px;
    text-align: left;
`

const Top = styled('div')`
    width: 100%;
    height: 65vh;
    background-image: ${(props) => `url("https://image.tmdb.org/t/p/original${props.imageUrl}");`}
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    padding: 24px;
    box-sizing: border-box;
    /* z-index: 100; */
    /* filter: grayscale(100%); */
    &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    /* filter: grayscale(100%);
    z-index: -100; */
    background-color: rgba(0,0,0, 0.555)
    }
    color: white;
`

const Title = styled('div')`
    font-weight: 500;
    font-size: 24px;
    z-index: 1;
    font-weight: 500;
    font-size: 56px;
    line-height: 64px;
    color: #FFFFFF;
`

const Text = styled('p')`
    font-size: 24px;
    z-index: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;
    text-align: justify;
`

const Stars = styled('div')`
  z-index: 1;
  font-size: 12px;
  color: #fff;
  margin-top: 10px;
`

const Genre = styled('span')`
    width: 65px;
    height: 24px;
    background: rgba(29, 29, 29, 0.5);
    border-radius: 0px 8px;
    z-index: 1;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #0FEFFD;
    margin-right: 10px;
`

const Bottom = styled('div')`
    width: 100%;
    height: 100%;
    /* text-align: left; */
`

export function MoviePage() {
    const params = useParams()
    const [data, setData] = useState()
    const [similar, setSimilar] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })

        fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
            .then((res) => res.json())
            .then((data) => {
                setSimilar(data.results)
        })
    }, [params.id])

    if(!data) {
        return 'Loading...'
    }
    if (!similar) {
        return 'Similar movies Loading...'
    }

    console.log(data)
    console.log(similar);
    return (

        <Wrapper>
            <Top imageUrl={data.backdrop_path}>
                <InnerWrapper>
                    {/* <Genre>{data && data.genres.map(item => {
                        return item.name + " "
                    })}</Genre> */}

                    {data && data.genres.map(item => {
                        return <Genre>{item.name}</Genre>
                    })}
                    <Stars>
                        {getStartsByRating(data.vote_average)}
                    </Stars>
                    <Title>{data && data.title}</Title>
                    <Text>{data && data.overview}</Text>
                </InnerWrapper>
            </Top>
            <Bottom>
                <Container maxWidth="xl">
                    <h1 style={{
                        fontSize: '34px',
                        lineHeight: '40px',
                        letterSpacing: '-0.02em',
                        color: '#FFFFFF',
                        textAlign: 'left'
                    }} >Similar Movies</h1>
                    <Grid container spacing={2}>
                        {similar.map((movie) => (
                            <Grid item xs={12 / 5}>
                                <MovieItem movie={movie} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Bottom>
        </Wrapper>

    )
}