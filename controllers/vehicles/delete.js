const Vehicle = require('../../models/Vehicle'); 

module.exports = async (req, res, next)=> {
    try{
        await Vehicle.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: `Vehicle has been deleted`});
    }catch(error){
        next(error);
    }
 }