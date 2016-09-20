var mongoose = require('mongoose');

var listingSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  availableFrom: Date,
  availableTo: Date,
});

var Listing = mongoose.model('Listing', listingSchema);

console.log('This file (listing.js) is loaded too!')