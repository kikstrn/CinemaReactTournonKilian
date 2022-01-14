import React, { Fragment, useState } from "react";
import { CardFilms } from "../Component/CardFilms/CardFilms";
import { getMovies } from "../service/movieService";
import '../assets/css/accueil.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Ajout de 3 films à la page Accueil
export const Accueil = (props) => {
    const [movies, setMovies] = useState([])
    if(movies.length === 0){
        getMovies().then(res => {
                setMovies(res);
        })
    }

    return ( 
        <Fragment>
            <div className="container mt-5">
                <div className="text-center infoCinema">
                    <h2>Cinéma du Quartier</h2>
                    <h5>Le cinéma du quartier est un cinéma crée depuis 1992 par l'association des pinguoins albinos.
                         Il a été rénové il y a 10 ans grâce à l'aide des gens du quartier dont le nom donné
                         à notre cinéma.
                    </h5>
                    <h3>Film à l'affiche :</h3>
                    <div className="row">
                        {/* Récupère les 3 premier film de la bdd json */}
                        {movies.slice(0,3).map((item,index)=>{
                            return (<CardFilms key={index} id={item.id} titre={item.title} image={item.image}></CardFilms>)
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Accueil;