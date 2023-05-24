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
            <div className='row'>
                {movie.map((item) => (
                    <div key={item.id} className='col-6 col-md-4 col-lg-3'>
                        <div className='card m-2 p'>
                            <img
                                className='img-fluid'
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt=''
                            />
                            <h6>{item.title}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeMovies;
