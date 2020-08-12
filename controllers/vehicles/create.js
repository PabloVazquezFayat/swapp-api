const Vehicle = require('../../models/Vehicle'); 

module.exports = async (req, res, next)=> {
    try{

        const newVehicleData = {
            name: req.body.name,
            model: req.body.model,
            manufacturer: req.body.manufacturer,
            costInCredits: req.body.costInCredits,
            length: req.body.length,
            maxAtmospheringSpeed: req.body.maxAtmospheringSpeed,
            crew: req.body.crew,
            passengers: req.body.passengers,
            cargoCapacity: req.body.cargoCapacity,
            consumables: req.body.consumables,
            vehicleClass: req.body.vehicleClass,
            imageURL: req.body.imageURL
        }

        const newVehicleCreated = await Vehicle.create(newVehicleData);

        if(newVehicleCreated){
            res.status(200).json({message: `${req.body.name} has been created`});
        }

    }catch(error){
        next(error);
    }
 }