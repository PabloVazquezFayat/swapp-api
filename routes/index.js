const express = require('express');
const router = express.Router();

const charactersCreate = require('../controllers/characters/create');
const charactersRead = require('../controllers/characters/read');
const charactersReadSingle = require('../controllers/characters/read-single')
const charactersUpdate = require('../controllers/characters/update');
const charactersDelete = require('../controllers/characters/delete');

/* CHARACTER ROUTES */
// post create character
router.post('/api/characters/create',  charactersCreate);

// get characters
router.get('/api/characters/read', charactersRead);

// get characters single
router.get('/api/characters/:id', charactersReadSingle);

// put characters
router.put('/api/characters/update', charactersUpdate);

// delete characters
router.delete('/api/character/delete', charactersDelete);

module.exports = router;
