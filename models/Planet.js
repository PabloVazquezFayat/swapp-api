const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name: {type: String},
    rotationPeriod: {type: String},
    orbitalPeriod: {type: String},
    diameter: {type: String},
    climate: {type: String},
    gravity: {type: String},
    terrain: {type: String},
    surfaceWater: {type: String},
    population: {type: String}
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;