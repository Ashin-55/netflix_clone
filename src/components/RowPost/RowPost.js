import React, { useState, useEffect } from 'react';
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constans/Constant'
import Youtube from "react-youtube"
import "./RowPost.css"

function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [movieClip, setMovieClip] = useState('')

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                console.log(response.data.results)
                setMovie(response.data.results)
            })
            .catch((err) => {
                //  alert(err)
            })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {

            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setMovieClip(response.data.results[0].key)
                console.log(id)
                console.log(response)
                console.log(response.data.results[0].key)
            })
            .catch((err) => {
                alert("trailer not avalble"+err)
            })
    }
    return (

        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movie.map(obj => {
                        return (

                            <img onClick={() => { handleMovie(obj.id) }} className={props.isSmall ? "smallPoster" : 'poster'} key={obj.id} src={`${movie && imageUrl + obj.backdrop_path}`} alt="poster" />
                        )
                    })
                }

            </div>
            {
               movieClip && <Youtube videoId={movieClip} opts={opts} />

            }
        </div>
    )
}

export default RowPost;
