const Species = require('../../models/Species'); 

module.exports = async (req, res, next)=> {
    try{

        const speciesData = {
            name: req.body.name,
            classification: req.body.classification,
            designation: req.body.designation,
            averageLifespan: req.body.averageLifespan,
            language: req.body.language
        }

        const speciesDataUpdated = await Species.findByIdAndUpdate({_id: req.body.id}, speciesData);

        if(speciesDataUpdated){
            res.status(200).json({message: `${req.body.name} has been updated`});
        }

    }catch(error){
        next(error);
    }
 }