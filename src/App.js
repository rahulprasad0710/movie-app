import "./App.css";
import HomeMovies from "./components/HomeMovies";
import Navbar from "./components/Navbar.jsx";
function App() {
    return (
        <div className='App'>
            <Navbar />
            <HomeMovies />
        </div>
    );
}

export default App;
