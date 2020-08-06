const Character = require('../../models/Character'); 

module.exports = async (req, res, next)=> {
    try{
        await Character.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: `Character has been deleted`});
    }catch(error){
        next(error);
    }
 }