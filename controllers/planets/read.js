const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;
        const count = await Planet.count();

        const planets = await Planet.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);

        const data = {
            count: count,
            data: planets
        }
        
        if(!planets || planets.length === 0){
            res.status(200).json({message: 'No planets found'});
            return;
        }

        if(planets){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error);
    }
 }