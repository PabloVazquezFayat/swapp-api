const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{
        await Planet.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: `Planet has been deleted`});
    }catch(error){
        next(error);
    }
 }