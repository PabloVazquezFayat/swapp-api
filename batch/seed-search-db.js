const axios = require('axios');

async function getData() {
        try{
            const data = await axios.get('http://localhost:4000/api/characters/read/1');
            return(data.data);
        }catch(error){
            console.log(error);
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

async function main() {
    var data = await getData();
    var parsedData = [];

    data.data.forEach(el => {
        parsedData.push(parseCharacterData(el));
    });

    console.log(parsedData);
}

main();


// data += characterData.name;
// data += characterData.homeWorld.name;
// data += characterData.homeWorld.rotationPeriod;
// data += characterData.homeWorld.orbitalPeriod;
// data += characterData.homeWorld.diameter;
// data += characterData.homeWorld.climate;
// data += characterData.homeWorld.gravity;
// data += characterData.homeWorld.terrain;
// data += characterData.homeWorld.surfaceWater;
// data += characterData.homeWorld.population;