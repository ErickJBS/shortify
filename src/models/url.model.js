import { Schema, model } from 'mongoose';

const UrlModelSchema = new Schema({
    urlId: String,
    url: {
        type: String,
        trim: true,
        required: true,
        maxlength: 150
    }
});

const UrlModel = model('Url', UrlModelSchema);

export default UrlModel;