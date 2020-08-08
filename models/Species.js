const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    name: {type: String},
    classification: {type: String},
    designation: {type: String},
    averageLifespan: {type: String},
    language: {type: String},
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;
