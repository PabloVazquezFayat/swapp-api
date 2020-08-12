const Species = require('../../models/Species'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;

        const species = await Species.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);
        
        if(!species || species.length === 0){
            res.status(200).json({message: 'No species found'});
            return;
        }

        if(species){
            res.status(200).json(species);
            return;
        }

    }catch(error){
        next(error);
    }
 }