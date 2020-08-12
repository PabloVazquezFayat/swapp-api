const Starship = require('../../models/Starship'); 

module.exports = async (req, res, next)=> {
    try{
        await Starship.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: `Starship has been deleted`});
    }catch(error){
        next(error);
    }
 }