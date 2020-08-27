const Starship = require('../../models/Starship'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;
        const count = await Starship.count();

        const starships = await Starship.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);

        const data = {
            count: count,
            data: starships
        }
        
        if(!starships || starships.length === 0){
            res.status(200).json({message: 'No starships found'});
            return;
        }

        if(starships){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error);
    }
 }