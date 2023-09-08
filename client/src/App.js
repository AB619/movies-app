import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Actors from './components/Actors';
import Movies from './components/Movies';
import Header from './components/Header';

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="actors" element={<Actors />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<h1>Not Found...</h1>} />
        </Routes>
    </>
  );
}

export default App;
