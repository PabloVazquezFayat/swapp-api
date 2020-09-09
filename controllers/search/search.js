const Character = require('../../models/Character');
const Planet = require('../../models/Planet');
const Species = require('../../models/Species');
const Starship = require('../../models/Starship');
const Vehicle = require('../../models/Vehicle');

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

        const planets = await Planets.find()
            .skip(resultsPerPage * currentPage)
            .limit(resultsPerPage);

        const 

        const data = {
            count: count,
            data: allData
        }
        
        //return formatted data

    }catch(error){
        next(error)
    }
 }