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

        const speciesDataUpdated = await Species.findByIdAndUpdate({_id: req.body._id}, speciesData, {new: true});

        if(speciesDataUpdated){
            res.status(200).json(speciesDataUpdated);
        }

    }catch(error){
        next(error);
    }
 }