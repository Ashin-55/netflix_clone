import React, { useEffect, useState } from "react";
import axios from "../../axios"
import { API_KEY, imageUrl } from "../../Constans/Constant"
import "./Banner.css"


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                console.log(response.data.results[0])
                setMovie(response.data.results.sort((a,b)=>{return 0.5-Math.random()})[0])
                console.log(response.data.results.sort((a,b)=>{return 0.5-Math.random()})[0])
                console.log(movie.title)
            })
            .catch((err) => {
                console.log("the error is " + err)
            })
    }, []);

    return (

        <div style={{ backgroundImage: `url(${movie && imageUrl + movie.backdrop_path })` }}
            className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">Mylist</button>
                </div>
                <h1 className="discription">{movie && movie.overview}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>

    )
}

export default Banner