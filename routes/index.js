const express = require('express');
const router = express.Router();

const charactersCreate = require('../controllers/characters/create');
const charactersRead = require('../controllers/characters/read');
const charactersReadSingle = require('../controllers/characters/read-single')
const charactersUpdate = require('../controllers/characters/update');
const charactersDelete = require('../controllers/characters/delete');

const planetCreate = require('../controllers/planets/create');
const planetRead = require('../controllers/planets/read');
const planetReadSingle = require('../controllers/planets/read-single');
const planetUpdate = require('../controllers/planets/update');
const planetDelete = require('../controllers/planets/delete');

const speciesCreate = require('../controllers/species/create');
const speciesRead = require('../controllers/species/read');
const speciesReadSingle = require('../controllers/species/read-single');
const speciesUpdate = require('../controllers/species/update');
const speciesDelete = require('../controllers/species/delete');

const starshipCreate = require('../controllers/starships/create');
const starshipRead = require('../controllers/starships/read');
const starshipReadSingle = require('../controllers/starships/read-single');
const starshipUpdate = require('../controllers/starships/update');
const starshipDelete = require('../controllers/starships/delete');

const vehicleCreate = require('../controllers/vehicles/create');
const vehicleRead = require('../controllers/vehicles/read');
const vehicleReadSingle = require('../controllers/vehicles/read-single');
const vehicleUpdate = require('../controllers/vehicles/update');
const vehicleDelete = require('../controllers/vehicles/delete');

const search = require('../controllers/search/search');


/* SEARCH */
// get search
router.get('/api/search', search);

/* CHARACTER ROUTES */
// post create character
router.post('/api/characters/create',  charactersCreate);

// get characters
router.get('/api/characters/read/:page', charactersRead);

// get characters single
router.get('/api/characters/:id', charactersReadSingle);

// put characters
router.put('/api/characters/update', charactersUpdate);

// delete characters
router.delete('/api/characters/delete', charactersDelete);


/* PLANETS ROUTES */
// post create 
router.post('/api/planets/create',  planetCreate);

// get planets
router.get('/api/planets/read/:page', planetRead);

// get planets single
router.get('/api/planets/:id', planetReadSingle);

// put planets
router.put('/api/planets/update', planetUpdate);

// delete planets
router.delete('/api/planets/delete', planetDelete);


/* SPECIES ROUTES */
// post create specicies
router.post('/api/species/create',  speciesCreate);

// get species
router.get('/api/species/read/:page', speciesRead);

// get species single
router.get('/api/species/:id', speciesReadSingle);

// put species
router.put('/api/species/update', speciesUpdate);

// delete species
router.delete('/api/species/delete', speciesDelete);


/* STARSHIP ROUTES */
// post create starship
router.post('/api/starships/create',  starshipCreate);

// get starship
router.get('/api/starships/read/:page', starshipRead);

// get starship single
router.get('/api/starships/:id', starshipReadSingle);

// put starship
router.put('/api/starships/update', starshipUpdate);

// delete starship
router.delete('/api/starships/delete', starshipDelete);


/* VEHICLES ROUTES */
// post create vehicles
router.post('/api/vehicles/create',  vehicleCreate);

// get vehicles
router.get('/api/vehicles/read/:page', vehicleRead);

// get vehicles single
router.get('/api/vehicles/:id', vehicleReadSingle);

// put vehicles
router.put('/api/vehicles/update', vehicleUpdate);

// delete vehicles
router.delete('/api/vehicles/delete', vehicleDelete);


module.exports = router;
