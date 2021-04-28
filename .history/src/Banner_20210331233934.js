import React, { useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchData() {
            const request =  await axios.get(requests.fetchNetflixOriginals);
            console.log(request.data);
        }
        fetchData();
    }, []);

    return (
        <header>
            <h1>b</h1>
        </header>
    )
}

export default Banner
