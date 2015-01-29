// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our  model
var reviewSchema = mongoose.Schema({
    name: {type: String, required: true} ,
    placeType: {type: String, required: true},
    stars: {type: Number, required: true}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Review', reviewSchema);