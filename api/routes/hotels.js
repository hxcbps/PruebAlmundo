var mongoose = require('mongoose');
var Hotel  = require('../models/hotel');

// GET - Return all hotels in the DB
exports.findAll = (req, res) => {
	Hotel.find((err, hotels) => {
    if (err) {
      res.send(500, err.message);
    }

    console.log('GET /hotels')
		res.status(200).jsonp(hotels);
	});
};

// GET - Return a hotel with specified ID
exports.findById = (req, res) => {
	Hotel.findById(req.params.id, (err, hotel) => {
    if (err) {
      return res.send(500, err.message);
    }

    console.log(`GET /hotel/ ${req.params.id}`);
		return res.status(200).jsonp(hotel);
	});
};
