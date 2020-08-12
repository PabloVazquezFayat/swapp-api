const Species = require('../../models/Species');

module.exports = async (req, res, next)=> {

    try{

        const newSpeciesData = {
            name: req.body.name,
            classification: req.body.classification,
            designation: req.body.designation,
            averageLifespan: req.body.averageLifespan,
            language: req.body.language
        }

        const newSpeciesCreated = await Species.create(newSpeciesData);

        if(newSpeciesCreated){
            res.status(200).json({message: `${req.body.name} has been created`});
        }

    }catch(error){
        next(error);
    }

}