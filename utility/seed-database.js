require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose')
const Character = require('../models/Character');
const Planet = require('../models/Planet');
const Starship = require('../models/Starship');
const Vehicle = require('../models/Vehicle');
const Species = require('../models/Species');


async function requestData(url){
    try{
        const data = await axios.get(url);
        return data.data;
    }catch(error){
        console.log(error);
    }
}

function mapData(data){
    return data.map((d)=>{
        return {
            name: d.name,
            species: undefined,
            homeWorld: undefined,
            starship: undefined,
            vehicles: undefined,
            imageURL: undefined,
        }
    })
}

function seedDataBase(data, model){
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    model.create(data, (err) => {
        if(err){ throw(err) }
        console.log(`Created ${model.length} entries`)
        mongoose.connection.close();
    });
}

async function main(url){

    try{

        const data = await requestData(url);
        const mappedData = await mapData(data.results);
        
        seedDataBase(mappedData, Character);

        if(data.next){
            main(data.next);
        }else{
            return;
        }

    }catch(error){
        console.log(error);
    }

}

main('https://swapi.dev/api/people/?page=1');

//URLs
// https://swapi.dev/api/people/?page=1
// https://swapi.dev/api/planets/?page=1
// https://swapi.dev/api/starships/?page=1
// https://swapi.dev/api/vehicles/?page=1
// https://swapi.dev/api/species/?page=1

//CHARACTER
// name: d.name,
// species: undefined,
// homeWorld: undefined,
// starship: undefined,
// vehicles: undefined,
// imageURL: undefined,

//PLANETS
// name: d.name,
// rotationPeriod: d.rotation_period,
// orbitalPeriod: d.orbital_period,
// diameter: d.diameter,
// climate: d.climate,
// gravity: d.gravity,
// terrain: d.terrain,
// surfaceWater: d.surface_water,
// population: d.population

//STARSHIPS
// name: d.name,
// model: d.model,
// manufacturer: d.manufacturer,
// costInCredits: d.cost_in_credits,
// length: d.length,
// maxAtmospheringSpeed: d.max_atmosphering_speed,
// crew: d.crew,
// passengers: d.passengers,
// cargoCapacity: d.cargo_capacity,
// consumables: d.consumables,
// hyperdriveRating: d.hyperdrive_rating,
// starshipClass: d.starship_class,

//VECHICLES
// name: d.name,
// model: d.model,
// manufacturer: d.manufacturer,
// costInCredits: d.cnst_in_credits,
// length: d.length,
// maxAtmospheringSpeed: max_atmosphering_speed,
// crew: d.crew,
// passengers: d.passengers,
// cargoCapacity: d.cargo_capacity,
// consumables: d.consumables,
// vehicleClass: d.vehicle_class,

//SPECIES
// name: d.name,
// classification: d.classification,
// designation: d.designation,
// averageLifespan: d.average_lifespan,
// language: d.language,