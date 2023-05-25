import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieiId } = useParams();
    console.log("ID", movieiId);
    return <div>MovieDetails Page</div>;
};

export default MovieDetails;
