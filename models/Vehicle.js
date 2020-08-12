const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
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
    vehicleClass: {type: String},
    imageURL: {type: String}
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;