import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);

    const fetchMovieDetails = async (id) => {
        try {
            const URL2 = `https://api.themoviedb.org/3/movie/${id}?api_key=acce88e8aaa658b4774ca08dccbf0935`;
            const response = await axios.get(URL2);
            setMovieDetails(response.data);
            console.log("response", response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovieDetails(movieId);
    }, [movieId]);

    return (
        <div>
            {movieDetails ? (
                <div className='container pt-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='float-end'>
                                <button
                                    onClick={() => navigate(-1)}
                                    className='btn btn-secondary btn-sm'>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <img
                                className='img-fluid movie-poster-img'
                                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                                alt=''
                            />
                        </div>
                        <div className='col-12 col-md-8'>
                            <div>
                                <h6>{movieDetails.title}</h6>
                                <p>{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h6>NO Movie Found</h6>
            )}
        </div>
    );
};

export default MovieDetails;
