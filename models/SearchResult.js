const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchResultSchema = new Schema({
    data: {type: String},
    url: {type: String}
});

const SearchResult = mongoose.model('SearchResult', searchResultSchema);

module.exports = SearchResult;