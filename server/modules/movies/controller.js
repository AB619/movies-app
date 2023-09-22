import { Movie } from '../../models/index.js';
import Joi from 'joi';

const listMovies = async (req, res) => {
  const { page, limit, sort, search } = req.query;
  try {
    const list = await Movie.find(search ? {
      title: new RegExp(
        '.*' + search + '.*', 'i'
      )
    } : {}, null, {
      limit,
      skip: page * limit,
      sort
    });
    const count = await Movie.count(search ? {
      title: new RegExp(
        '.*' + search + '.*', 'i'
      )
    } : {});

    return res.json({
      data: {
        list,
        count
      }
    });
  }
  catch (error) {
    return res.status(503).send(`Server is having issues! ${error}`);
  }
};

const addMovie = async (req, res) => {
  const { title, poster, rating, type } = req.body;

  const schema = Joi.object({
    title: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    type: Joi.string().valid('movie', 'series').required(),

    poster: Joi.string().uri().required(),

    rating: Joi.number()
      .integer()
      .min(1)
      .max(5)
      .required(),
  });

  try {
    const value = await schema.validateAsync({ title, poster, rating, type });
    await Movie.create({
      id: `${Math.random() * 1000}_${title}`, ...value.value
    });

    return res.json({
      message: "Movie Added Successfully!",
    });
  }
  catch (error) {
    return res.status(500).json({
      message: "Movie Addition Failed!",
      error: error?.message,
    });
  }
}

export { listMovies, addMovie };