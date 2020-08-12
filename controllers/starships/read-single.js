const Starship = require('../../models/Starship'); 

module.exports = async (req, res, next)=> {
    try{

        const starship = await Starship.findOne({_id: req.params.id})

        if(!starship){
            res.status(200).json({message: 'Starship not found'});
        }

        if(starship){
            res.status(200).json(starship);
        }

    }catch(error){
        next(error);
    }
 }