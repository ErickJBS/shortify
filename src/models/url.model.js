const { Schema, model } = require('mongoose');

const UrlModelSchema = new Schema({
    urlId: String,
    url: String
});

const UrlModel = model('Url', UrlModelSchema);

module.exports = UrlModel;