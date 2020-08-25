const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{

        const planetData = {
            name: req.body.name,
            rotationPeriod: req.body.rotationPeriod,
            orbitalPeriod: req.body.orbitalPeriod,
            diameter: req.body.diameter,
            climate: req.body.climate,
            gravity: req.body.gravity,
            terrain: req.body.terrain,
            surfaceWater: req.body.surfaceWater,
            population: req.body.population,
            imageURL: req.body.imageURL
        }

        const planetDataUpdated = await Planet.findByIdAndUpdate({_id: req.body._id}, planetData, {new: true});

        if(planetDataUpdated){
            res.status(200).json(planetDataUpdated);
        }

    }catch(error){
        next(error);
    }
 }