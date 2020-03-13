import UrlModel from '../models/url.model';
import { randomString } from '../utils/random-generator';

class UrlService {

    ID_DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    ID_LENGTH = 8;

    createShortUrl(url) {
        const urlId = randomString(this.ID_DICT, this.ID_LENGTH);
        const urlData = {
            urlId, url
        };
        return UrlModel.create(urlData);
    }

    getShortUrl(urlId) {
        return UrlModel.findOne({ urlId });
    }
}
export default new UrlService();