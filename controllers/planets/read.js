const Planet = require('../../models/Planet'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = req.params.page;

        const planets = await Planet.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);
        
        if(!planets || planets.length === 0){
            res.status(200).json({message: 'No planets found'});
            return;
        }

        if(planets){
            res.status(200).json(planets);
            return;
        }

    }catch(error){
        next(error);
    }
 }