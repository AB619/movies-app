import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <ul>
          <li><Link to="/">Movies IMDB</Link></li>
          <li><Link to="/actors">Actors</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
    )
};

export default Header;