const Species = require('../../models/Species'); 

module.exports = async (req, res, next)=> {
    try{

        const species = await Species.findOne({_id: req.params.id})

        if(!species){
            res.status(200).json({message: 'Species not found'});
        }

        if(species){
            res.status(200).json(species);
        }

    }catch(error){
        next(error);
    }
 }