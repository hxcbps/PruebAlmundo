const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const HotelSchema = new Schema({
  name:    { type: String },
  stars:     { type: Number },
  price:  { type: Number },
  address:   { type: String }
});

module.exports = mongoose.model('Hotel', HotelSchema);
