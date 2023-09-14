import { Movie } from '../../models/index.js';

const listMovies = async(req, res) => {
  try{
    return res.json({
      data: await Movie.find({type: 'movie'})
    });
  }
  catch(error){
    return res.status(503).send(`Server is having issues! ${error}`);
  }
};

export {listMovies};