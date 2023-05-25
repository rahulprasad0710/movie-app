import { createBrowserRouter } from "react-router-dom";
import MovieDetails from "../view/MovieDetails";
// Home Page
import HomePage from "../App";

import LoginPage from "../view/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "about",
        element: <div>About</div>,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "movie-details/:movieiId",
        element: <MovieDetails />,
    },
]);

export default router;
