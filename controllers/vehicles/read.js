const Vehicle = require('../../models/Vehicle'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;

        console.log(resultsPerPage * currentPage);

        const vehicles = await Vehicle.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);
        
        if(!vehicles || vehicles.length === 0){
            res.status(200).json({message: 'No vehicles found'});
            return;
        }

        if(vehicles){
            res.status(200).json(vehicles);
            return;
        }

    }catch(error){
        next(error)
    }
 }