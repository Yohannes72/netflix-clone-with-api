import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movieTokko, setmovieTokko] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setmovieTokko(
                request.data.results[Math.floor(Math.random() * request.data.results.length)]
            );

            return request;
        }
        fetchData();
    }, []);
    console.log(movieTokko);

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div className = "Banner"
        style = {
            {
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${movieTokko.backdrop_path}")`,
                backgroundPosition: "center center",

            }
        } >

        <div className = "Banner__content" >
        <h1 className = "Banner__title" > { movieTokko?.title || movieTokko?.name || movieTokko?.original_name }
        </h1>
        <div className = "Banner__buttons" >
        <button className = "Banner__button" > Play </button>
        <button className = "Banner__button" > My List </button>

        </div>
        <h1 className = "Banner__description" > { truncate(movieTokko.overview, 150) } </h1>
        </div>

        <div className = 'Banner__fadeBottom' >

        </div>

        </div>
    )
}

export default Banner;
