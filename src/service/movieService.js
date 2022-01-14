import { v4 as uuidv4} from "uuid"

export const getMovies = async () =>{
    const movies = await fetch("/movie")
    .then(res => res.json())
    .then(res => res.items)
    .catch(e => console.error(e));
    console.log(movies)
    return movies;
}

export const getMovieById = async (id) => {
    const movies = await getMovies(); 
    return movies.find(movie => movie.id === id)    
}

export const postMovie = async (movie) => {
    const movies = await getMovies();
    movie.id = uuidv4();
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items:[...movies,movie]
        })
    };
    try {
        const fetchResponse = await fetch("/movie", settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        throw e;
    } 
}

export const deleteMovieById = async (id) => {
    const movies = await getMovies();
    const indexMovie = movies.findIndex(element =>element.id === id);
    movies.splice(indexMovie,1);
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items:[...movies]
        })
    };
    try {
        const fetchResponse = await fetch("/movie", settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        throw e;
    } 
}