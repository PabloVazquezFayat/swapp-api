const Vehicle = require('../../models/Vehicle'); 

module.exports = async (req, res, next)=> {
    try{

        const vehicleData = {
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

        const vehicleDataUpdated = await Vehicle.findByIdAndUpdate({_id: req.body._id}, vehicleData);

        if(vehicleDataUpdated){
            res.status(200).json(vehicleDataUpdated);
        }

    }catch(error){
        next(error)
    }
 }