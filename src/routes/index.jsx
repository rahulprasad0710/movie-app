import { createBrowserRouter } from "react-router-dom";
// Home Page
import HomePage from "../App";
import MovieDetails from "../view/MovieDetails";
//Auth Pages
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
