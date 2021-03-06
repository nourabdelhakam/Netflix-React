import React, { useState, useEffect} from 'react';
import axios from './axios';
import './Row.css'

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // setMovies(request.data.results);
            console.log(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    console.log(movies)

    return (
        <div className="row">
           <h2>{ title }</h2> 

           <div className="row__posters">
               {movies.map(movie => (
                   <img key={movie.id} className="row__poster" src={`${baseImgUrl}${movie.poster_path}`} alt={movie.name}/>
               ))}
           </div>

        </div>
    )
}

export default Row
