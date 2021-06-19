const express = require("express");
const router = express.Router();

const charactersCreate = require("../controllers/characters/create");
const charactersRead = require("../controllers/characters/read");
const charactersReadSingle = require("../controllers/characters/read-single");
const charactersUpdate = require("../controllers/characters/update");
const charactersDelete = require("../controllers/characters/delete");

const planetCreate = require("../controllers/planets/create");
const planetRead = require("../controllers/planets/read");
const planetReadSingle = require("../controllers/planets/read-single");
const planetUpdate = require("../controllers/planets/update");
const planetDelete = require("../controllers/planets/delete");

const speciesCreate = require("../controllers/species/create");
const speciesRead = require("../controllers/species/read");
const speciesReadSingle = require("../controllers/species/read-single");
const speciesUpdate = require("../controllers/species/update");
const speciesDelete = require("../controllers/species/delete");

const starshipCreate = require("../controllers/starships/create");
const starshipRead = require("../controllers/starships/read");
const starshipReadSingle = require("../controllers/starships/read-single");
const starshipUpdate = require("../controllers/starships/update");
const starshipDelete = require("../controllers/starships/delete");

const vehicleCreate = require("../controllers/vehicles/create");
const vehicleRead = require("../controllers/vehicles/read");
const vehicleReadSingle = require("../controllers/vehicles/read-single");
const vehicleUpdate = require("../controllers/vehicles/update");
const vehicleDelete = require("../controllers/vehicles/delete");

const pagination = require("../middlewares/pagination");

const search = require("../controllers/search/search");

/* SEARCH */
// get search
router.get("/search", search);

/* CHARACTER ROUTES */
// post create character
router.post("/characters", charactersCreate);

// get characters
router.get("/characters/", pagination, charactersRead);

// get characters single
router.get("/characters/:id", charactersReadSingle);

// put characters
router.put("/characters", charactersUpdate);

// delete characters
router.delete("/characters", charactersDelete);

/* PLANETS ROUTES */
// post create
router.post("/planets", planetCreate);

// get planets
router.get("/planets/", pagination, planetRead);

// get planets single
router.get("/planets/:id", planetReadSingle);

// put planets
router.put("/planets", planetUpdate);

// delete planets
router.delete("/planets", planetDelete);

/* SPECIES ROUTES */
// post create specicies
router.post("/species", speciesCreate);

// get species
router.get("/species/", pagination, speciesRead);

// get species single
router.get("/species/:id", speciesReadSingle);

// put species
router.put("/species", speciesUpdate);

// delete species
router.delete("/species", speciesDelete);

/* STARSHIP ROUTES */
// post create starship
router.post("/starships", starshipCreate);

// get starship
router.get("/starships/", pagination, starshipRead);

// get starship single
router.get("/starships/:id", starshipReadSingle);

// put starship
router.put("/starships", starshipUpdate);

// delete starship
router.delete("/starships", starshipDelete);

/* VEHICLES ROUTES */
// post create vehicles
router.post("/vehicles", vehicleCreate);

// get vehicles
router.get("/vehicles/", pagination, vehicleRead);

// get vehicles single
router.get("/vehicles/:id", vehicleReadSingle);

// put vehicles
router.put("/vehicles", vehicleUpdate);

// delete vehicles
router.delete("/vehicles", vehicleDelete);

module.exports = router;
