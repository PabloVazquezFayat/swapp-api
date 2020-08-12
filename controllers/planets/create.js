const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{

        const newPlanetData = {
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

        const newPlanetCreated = await Planet.create(newPlanetData);

        if(newPlanetCreated){
            res.status(200).json({message: `${req.body.name} has been created`});
        }

    }catch(error){
        next(error)
    }
 }