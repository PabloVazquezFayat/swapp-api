const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starshipSchema = new Schema({
    name: {type: String},
    model: {type: String},
    manufacturer: {type: String},
    costInCredits: {type: String},
    length: {type: String},
    maxAtmospheringSpeed: {type: String},
    crew: {type: String},
    passengers: {type: String},
    cargoCapacity: {type: String},
    consumables: {type: String},
    hyperdriveRating: {type: String},
    starshipClass: {type: String},
});

const Starship = mongoose.model('Starship', starshipSchema);

module.exports = Starship;