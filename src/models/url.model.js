import { Schema, model } from 'mongoose';

const UrlModelSchema = new Schema({
    urlId: String,
    url: String
});

const UrlModel = model('Url', UrlModelSchema);

export default UrlModel;