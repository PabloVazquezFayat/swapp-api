const Character = require('../../models/Character'); 

module.exports = async (req, res, next)=> {
    try{

        const newCharacterData = {
            name: req.body.name,
            species: req.body.species,
            rank: req.body.rank,
            faction: req.body.faction,
            weapon: req.body.faction,
            homeWorld: req.body.homeWorld,
            starship: req.body.starship,
            vehicles: req.body.vehicles,
            imageURL: req.body.imageURL
        }

        const newCharacterCreated = await Character.create(newCharacterData);

        if(newCharacterCreated){
            res.status(200).json({message: `${req.body.name} has been created`});
        }

    }catch(error){
        next(error)
    }
 }