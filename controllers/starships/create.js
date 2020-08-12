const Starship = require('../../models/Starship'); 

module.exports = async (req, res, next)=> {
    try{

        const newStarshipData = {
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
            hyperdriveRating: req.body.hyperdriveRating,
            starshipClass: req.body.newStarshipData,
            imageURL: req.body.imageURL,
        }

        const newStarshipCreated = await Starship.create(newStarshipData);

        if(newStarshipCreated){
            res.status(200).json({message: `${req.body.name} has been created`});
        }

    }catch(error){
        next(error)
    }
 }