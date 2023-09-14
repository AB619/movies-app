import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
}, {
  collection: 'movies_details',
  timestamps: true
});

schema.plugin(paginate);

const Movie = mongoose.model('Movie', schema)

export {Movie};

//module.exports = mongoose.model('Movie', schema);