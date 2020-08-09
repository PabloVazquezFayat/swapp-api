const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {type: String},
    species: {type: mongoose.Schema.Types.ObjectId, ref: 'Species'},
    weapon: {type: mongoose.Schema.Types.ObjectId, ref: 'Weapon'},
    homeWorld: {type: mongoose.Schema.Types.ObjectId, ref: 'Planet'},
    starship: [{type: mongoose.Schema.Types.ObjectId, ref: 'Starship'}],
    vehicles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle'}],
    imageURL: {type: String},
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;

