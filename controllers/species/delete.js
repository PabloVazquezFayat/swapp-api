const Species = require('../../models/Species'); 

module.exports = async (req, res, next)=> {
    try{
        await Species.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: `Species has been deleted`});
    }catch(error){
        next(error);
    }
 }