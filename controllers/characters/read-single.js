const Character = require('../../models/Character'); 

module.exports = async (req, res, next)=> {
    try{

        const character = await Character.findOne({_id: req.params.id})
            .populate({path: 'species'})
            .populate({path: 'rank'})
            .populate({path: 'faction'})
            .populate({path: 'weapon'})
            .populate({path: 'homeWorld'})
            .populate({path: 'starship'})
            .populate({path: 'vehicles'})

        if(!character){
            res.status(200).json({message: 'Character not found'});
        }

        if(character){
            res.status(200).json(character);
        }

    }catch(error){
        next(error)
    }
 }