import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div className=' min-height '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
