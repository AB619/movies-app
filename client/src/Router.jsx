import { Routes, Route } from 'react-router-dom';
import Series from './pages/Series';
import Movies from './pages/Movies';
import NotFound from './components/NotFound';
import NewCard from './pages/NewCard';

const Router = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/config" element={<NewCard />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    )
};

export default Router;