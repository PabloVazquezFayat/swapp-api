require('dotenv').config();
const mongoose = require('mongoose')
const axios = require('axios');
const SearchResult = require('../models/SearchResult');

async function getData(paths) {
    try{
        const mappedPaths = paths.map(path => axios.get(path));
        const data = await axios.all(mappedPaths);
        const mappedData = data.map( d => d.data.data);
        return [].concat.apply([], mappedData);
    }catch(error){
        return console.log(error);
    }
}

function parseCharacterData(characterData) {

    let data = '';
    let url = 'http://localhost:4000/api/characters/';
    
    for (const key in characterData) {
        if(key === '_id'){  
            url += characterData[key];
        }else if(key !== '_id' && key !== '__v' && typeof characterData[key] !== 'object'){
            data += ` ${characterData[key]}`;
        }else if(Array.isArray(characterData[key]) && characterData[key].length > 0 && key === 'starship'){
            let starshipData = characterData[key].map(el => {
                return ` ${el.name} ${el.model} ${el.manufacturer} ${el.starshipClass}`;
            });
            data += starshipData.join();
        }else if(Array.isArray(characterData[key]) && characterData[key].length > 0 && key === 'vehicles'){
            let vehiclesData = characterData[key].map(el => {
                return ` ${el.name} ${el.model} ${el.manufacturer} ${el.vehicleClass}`;
            });
            data += vehiclesData.join();
        }else if(typeof characterData[key] === 'object' && characterData[key] !== null && key === 'homeWorld'){
            data += ` ${characterData[key].name} ${characterData[key].climate} ${characterData[key].terrain}`;
        }else if(typeof characterData[key] === 'object' && characterData[key] !== null && key === 'species'){
            data += ` ${characterData[key].name} ${characterData[key].classification} ${characterData[key].designation} ${characterData[key].language}`;
        }
    }

    return {data: data, url: url};

}

function parsePlanetData(planetData){
    
    let data = '';
    let url = 'http://localhost:4000/api/planets/' + planetData._id;

    if(planetData.name){
        data += ` ${planetData.name}`;
    }

    if(planetData.climate){
        data += ` ${planetData.climate}`;
    }

    if(planetData.terrain){
        data += ` ${planetData.terrain}`;
    }

    return {data: data, url: url}
}

function parseSpeciesData(speciesData){
    //logic here...
}

function parseStarshipData(starshipData){
    //logic here...
}

function parseVehicleData(vehicleData){
    //logic here...
}

function seedDataBase(data, model){
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    model.create(data, (err) => {
        if(err){ throw(err) }
        console.log(`Created ${data.length} entries`)
        mongoose.connection.close();
    });
}

async function main() {

    let endpoints = {
        characters: [
            'http://localhost:4000/api/characters/read/1',
            'http://localhost:4000/api/characters/read/2',
            'http://localhost:4000/api/characters/read/3',
            'http://localhost:4000/api/characters/read/4',
            'http://localhost:4000/api/characters/read/5',
            'http://localhost:4000/api/characters/read/6',
            'http://localhost:4000/api/characters/read/7',
            'http://localhost:4000/api/characters/read/8',
            'http://localhost:4000/api/characters/read/9',
        ],
        planets: [
            'http://localhost:4000/api/planets/read/1',
            'http://localhost:4000/api/planets/read/2',
            'http://localhost:4000/api/planets/read/3',
            'http://localhost:4000/api/planets/read/4',
            'http://localhost:4000/api/planets/read/5',
            'http://localhost:4000/api/planets/read/6'
        ],
        species: [
            'http://localhost:4000/api/species/read/1',
            'http://localhost:4000/api/species/read/2',
            'http://localhost:4000/api/species/read/3',
            'http://localhost:4000/api/species/read/4'
        ],
        starships: [
            'http://localhost:4000/api/starships/read/1',
            'http://localhost:4000/api/starships/read/2',
            'http://localhost:4000/api/starships/read/3',
            'http://localhost:4000/api/starships/read/4'
        ],
        vehicles: [
            'http://localhost:4000/api/vehicles/read/1',
            'http://localhost:4000/api/vehicles/read/2',
            'http://localhost:4000/api/vehicles/read/3',
            'http://localhost:4000/api/vehicles/read/4'
        ]
    }

    let data = {
        characters: await getData(endpoints.characters),
        planets: await getData(endpoints.planets),
        species: await getData(endpoints.species),
        starships: await getData(endpoints.starships),
        vehicles: await getData(endpoints.vehicles),
    };

    let parsedData = [];

    for (const key in data) {
        if (key === 'characters') {
            let characterData = data[key].map( el => parseCharacterData(el));
            parsedData.push(characterData);
        }
        if (key === 'planets') {
            let planetData = data[key].map( el => parsePlanetData(el));
            parsedData.push(planetData);
        }
        // if (key === 'species') {
        //     let speciesData = data[key].map( el => parseSpeciesData(el));
        //     parsedData.push(speciesData);
        // }
        // if (key === 'starships') {
        //     let starshipData = data[key].map( el => parseStarshipData(el));
        //     parsedData.push(starshipData);
        // }
        // if (key === 'vehicles') {
        //     let vehicleData = data[key].map( el => parseVehicleData(el));
        //     parsedData.push(vehicleData);
        // }
    }

    let allData = [].concat.apply([], parsedData);

    seedDataBase(allData, SearchResult);
}

main();