const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{

        const newPlanetData = {
            name: {type: String},
            rotationPeriod: {type: String},
            orbitalPeriod: {type: String},
            diameter: {type: String},
            climate: {type: String},
            gravity: {type: String},
            terrain: {type: String},
            surfaceWater: {type: String},
            population: {type: String}
        }

        const newPlanetCreated = await Planet.create(newPlanetData);

        if(newPlanetCreated){
            res.status(200).json({message: `${req.body.name} has been created`});
        }

    }catch(error){
        next(error)
    }
 }