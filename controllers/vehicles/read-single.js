const Vehicle = require('../../models/Vehicle');

module.exports = async (req, res, next)=> {
    try{

        const vehicleData = await Vehicle.findOne({_id: req.params.id})

        if(!vehicleData){
            res.status(200).json({message: 'Vehicle not found'});
        }

        if(vehicleData){
            res.status(200).json(vehicleData);
        }

    }catch(error){
        next(error)
    }
 }