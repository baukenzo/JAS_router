import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import { Factorial } from './pages/Factorial';
import { Fibonacci } from './pages/Fibonacci';
import {useState} from "react";
import { Navbar } from './components/Navbar';
// import { MoviesPage } from './pages/Movies';
import {MoviesPage} from "./pages/MoviesPage";
import { MoviePage } from './pages/MoviePage';

function App() {
    const [counter, setCounter] = useState(5)

    return (
        <div className="App">
            <Navbar/>

            {/* <button onClick={() => setCounter(counter + 1)} >добавить</button>
            <button onClick={() => setCounter(counter - 1)} >убрать</button>

            <p>{counter}</p> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/fibonacci" element={<Fibonacci counter={counter} />} />
                <Route path="/factorial" element={<Factorial counter={counter} />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
            </Routes>
        </div>
    );
}

export default App;