const Character = require('../../models/Character');
const Planet = require('../../models/Planet');
const Species = require('../../models/Species');
const Starship = require('../../models/Starship');
const SearchResult = require('../../models/SearchResult')

module.exports = async (req, res, next)=> {
    try{

        const count = await SearchResult.countDocuments();
        const searchResults = await SearchResult.find({data: {$regex : `.*${req.body.search}.*`, '$options' : 'i'}});

        const data = {
            count: count,
            data: searchResults
        }

        if(searchResults){
            res.status(200).json(data);
            return;
        }

    }catch(error){
        next(error)
    }
 }