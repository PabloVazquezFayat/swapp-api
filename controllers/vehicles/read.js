const Vehicle = require('../../models/Vehicle'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;
        const count = await Vehicle.count();

        const vehicles = await Vehicle.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);

        const data = {
            count: count,
            data: vehicles
        }
        
        if(!vehicles || vehicles.length === 0){
            res.status(200).json({message: 'No vehicles found'});
            return;
        }

        if(vehicles){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error)
    }
 }