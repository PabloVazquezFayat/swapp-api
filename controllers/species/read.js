const Species = require('../../models/Species'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;
        const count = await Species.count();

        const species = await Species.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);

        const data = {
            count: count,
            data: species
        }
        
        if(!species || species.length === 0){
            res.status(200).json({message: 'No species found'});
            return;
        }

        if(species){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error);
    }
 }