import React, { useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchData() {
            const request =  await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    return (
        <header className="banner" 
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
        }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movie.title}</h1>
            </div>
        </header>
    )
}

export default Banner
