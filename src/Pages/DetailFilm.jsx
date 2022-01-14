import React, { Fragment, useState } from "react";
import {useParams} from 'react-router-dom'
import { getMovieById } from "../service/movieService";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/detailFilm.css';

export const DetailFilm = (props) => {
    const [movie, setMovie] = useState()
    let params = useParams();

    if(!movie){ 
        getMovieById(params.id).then(res =>{
            setMovie(res);
        })
    }else{
        console.log(movie)
    }
    
    return ( 
        <Fragment>
            <div className="container">
                {movie && (
                    <Fragment>
                        <div className="container mt-5">
                            <img className='image' src={movie.image} alt="" />
                            <h3 className="text-center">{movie.title}</h3>
                        </div>

                    </Fragment>
                )}
            </div>
        </Fragment>
    )
};

export default DetailFilm;