require('dotenv').config();
const mongoose = require('mongoose')
const axios = require('axios');
const SearchResult = require('../models/SearchResult');

async function getData() {
    try{

        const data = await axios.all([
            axios.get('http://localhost:4000/api/characters/read/1'),
            axios.get('http://localhost:4000/api/characters/read/2'),
            axios.get('http://localhost:4000/api/characters/read/3'),
            axios.get('http://localhost:4000/api/characters/read/4'),
            axios.get('http://localhost:4000/api/characters/read/5'),
            axios.get('http://localhost:4000/api/characters/read/6'),
            axios.get('http://localhost:4000/api/characters/read/7'),
            axios.get('http://localhost:4000/api/characters/read/8'),
            axios.get('http://localhost:4000/api/characters/read/9'),
        ]);

        const mappedData = data.map((d)=>{
            return d.data.data;
        })

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

function seedDataBase(data, model){
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    model.create(data, (err) => {
        if(err){ throw(err) }
        console.log(`Created ${data.length} entries`)
        mongoose.connection.close();
    });
}

async function main() {

    let data = await getData();
    let parsedData = data.map(el => {
        return parseCharacterData(el);
    });

    seedDataBase(parsedData, SearchResult);
}

main();


// FINISH MAPPING THE REST OF THE DATA INTO SEARCH RESULTS