import { useEffect, useState } from "react";
import axios from "axios";

const HomeMovies = () => {
    const [movie, setMovie] = useState([]);
    const URL =
        "https://api.themoviedb.org/3/discover/movie?api_key=acce88e8aaa658b4774ca08dccbf0935";

    const fetchMovieData = async () => {
        try {
            const response = await axios.get(URL);
            console.log("movieData", response);
            setMovie(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovieData();
    }, []);

    return (
        <div className='container py-3'>
            <h3>Movie Section</h3>
            {movie.map((item) => (
                <div>
                    <h3>{item.original_title}</h3>
                </div>
            ))}
        </div>
    );
};

export default HomeMovies;
