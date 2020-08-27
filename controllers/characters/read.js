const Character = require('../../models/Character'); 

module.exports = async (req, res, next)=> {
    try{

        const resultsPerPage = 10;
        const currentPage = parseInt(req.params.page) - 1;  
        const count = await Character.count();

        const characters = await Character.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage)
            .populate({path: 'homeWorld'})
            .populate({path: 'vehicles'})
            .populate({path: 'starship'})

        const data = {
            count: count,
            data: characters
        }
        
        if(!characters || characters.length === 0){
            res.status(200).json({message: 'No characters found'});
            return;
        }

        if(characters){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error)
    }
 }