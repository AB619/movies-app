import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

const schema = new mongoose.Schema({
  id: {
    type: String,
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
  collection: 'series_details',
  timestamps: true
});

schema.plugin(paginate);

const Series = mongoose.model('Series', schema);

export { Series }