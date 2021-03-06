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

        const characterDataUpdated = await Character.findByIdAndUpdate({_id: req.body._id}, characterData, {new: true})
        .populate({path: 'species'})
        .populate({path: 'homeWorld'})
        .populate({path: 'starship'})
        .populate({path: 'vehicles'})
        
        if(characterDataUpdated){
            res.status(200).json(characterDataUpdated);
        }

    }catch(error){
        next(error)
    }
 }