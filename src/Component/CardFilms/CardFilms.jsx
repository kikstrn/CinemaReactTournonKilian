import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { deleteMovieById } from '../../service/movieService';
import "./cardFilm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Fonction permettant de supprimer la card lors du click sur le btn "supprimer"
export function CardFilms(props) {
    const handleDelete = (e) => {
        e.stopPropagation();
        deleteMovieById(props.id)
        .then(res=>{
            console.log(res);
            window.location.reload();
        })
        .catch(e=>{
            console.error(e)
        })
    }

    return (
        <Fragment>
            <div className="col-4">
                <div className='divCardFilm'>
                        {/* les informations du film */}
                        <img className='image' src={props.image} alt="" />
                        <h3 className='text-center'>{props.titre}</h3>
                        <Link className='link' key={props.id} to={'/DetailFilm/' + props.id}>
                            <button className='savoirplus'>En savoir +</button>
                        </Link>
                        <button onClick={handleDelete} className='savoirplus mt-2 mb-5'>Supprimer</button>
                </div>
            </div>
        </Fragment>
  )
}

export default CardFilms;