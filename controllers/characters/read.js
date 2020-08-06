const Character = require('../../models/Character'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = req.params.page;

        const characters = await Character.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);
        
        if(!characters || characters.length === 0){
            res.status(200).json({message: 'No characters found'});
            return;
        }

        if(characters){
            res.status(200).json(characters);
            return;
        }

    }catch(error){
        next(error)
    }
 }