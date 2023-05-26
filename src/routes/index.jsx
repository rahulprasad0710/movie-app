import { createBrowserRouter } from "react-router-dom";
// Home Page
import HomePage from "../view/HomePage";
import MovieDetails from "../view/MovieDetails";
//Auth Pages
import LoginPage from "../view/LoginPage";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
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
                path: "movie-details/:movieId",
                element: <MovieDetails />,
            },
        ],
    },
]);

export default router;
