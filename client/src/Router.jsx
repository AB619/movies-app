import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import NotFound from './components/NotFound';

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    )
};

export default Router;