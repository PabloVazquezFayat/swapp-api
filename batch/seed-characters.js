require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose')
const Character = require('../models/Character');

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
            rank: undefined,
            faction: undefined,
            weapon: undefined,
            homeWorld: undefined,
            starship: undefined,
            vehicles: undefined,
            imageURL: undefined,
        }
    })
}

function seedDataBase(data){
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    Character.create(data, (err) => {
        if(err){ throw(err) }
        console.log(`Created ${data.length} characters`)
        mongoose.connection.close();
    });
}

async function main(url){

    try{

        const data = await requestData(url);
        const mappedData = await mapData(data.results);
        
        seedDataBase(mappedData);

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