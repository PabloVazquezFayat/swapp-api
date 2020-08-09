const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{

        const planet = await Planet.findOne({_id: req.params.id})

        if(!planet){
            res.status(200).json({message: 'Planet not found'});
        }

        if(planet){
            res.status(200).json(planet);
        }

    }catch(error){
        next(error);
    }
 }