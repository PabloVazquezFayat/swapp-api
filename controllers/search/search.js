const Character = require('../../models/Character');
const Planet = require('../../models/Planet');
const Species = require('../../models/Species');
const Starship = require('../../models/Starship');
const Vehicle = require('../../models/Vehicle');

module.exports = async (req, res, next)=> {

    function combineArrays(arrays){
        const arr = [];
        arrays.forEach(ar => {
            ar.forEach(element => arr.push(element));
        });
        return arr;
    }

    try{

        const characterCount = await Character.countDocuments();
        const planetCount = await Planet.countDocuments();
        const speciesCount = await Species.countDocuments();
        const starshipCount = await Starship.countDocuments();
        const vehicleCount = await Vehicle.countDocuments();

        const count = characterCount + planetCount + speciesCount + starshipCount + vehicleCount;

        const characters = await Character.find({$or:[{name: {$regex : `.*${req.body.search}.*`, '$options' : 'i'}}]});
        const planets = await Planet.find({$or:[{name: {$regex : `.*${req.body.search}.*`, '$options' : 'i'}}]})
        const species = await Species.find({$or:[{name: {$regex : `.*${req.body.search}.*`, '$options' : 'i'}}]})
        const starships = await Starship.find({$or:[{name: {$regex : `.*${req.body.search}.*`, '$options' : 'i'}}]});
        const vehicles = await Vehicle.find({$or:[{name: {$regex : `.*${req.body.search}.*`, '$options' : 'i'}}]});

        const allData = combineArrays([characters, planets, species, starships, vehicles]);

        const data = {
            count: count,
            data: allData
        }

        if(allData){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error)
    }
 }