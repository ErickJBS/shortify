import UrlModel from '../models/url.model';
import { randomString } from '../utils/random-generator';
import { validate } from '../utils/url-validator';

class UrlService {

    ID_DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    ID_LENGTH = 8;

    createShortUrl(url) {
        if (!validate(url)) {
            throw "Invalid URL format";
        }
        url = this.normalizeUrl(url);
        const urlId = randomString(this.ID_DICT, this.ID_LENGTH);
        const urlData = {
            urlId, url
        };
        return UrlModel.create(urlData);
    }

    getShortUrl(urlId) {
        return UrlModel.findOne({ urlId });
    }

    normalizeUrl(url) {
        const normUrl = url.trim().toLowerCase();
        const hasHttp = normUrl.startsWith('http://') || normUrl.startsWith('https://');
        return `${!hasHttp? 'http://' : ''}${url}`;
    }
}
export default new UrlService();