const Character = require('../../models/Character'); 

module.exports = async (req, res, next)=> {
    try{

        const characterData = {
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

        const characterDataUpdated = await Character.findByIdAndUpdate({_id: req.body.id}, characterData);

        if(characterDataUpdated){
            res.status(200).json({message: `${req.body.name} has been updated`});
        }

    }catch(error){
        next(error)
    }
 }