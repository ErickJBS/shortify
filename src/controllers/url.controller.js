import UrlService from '../services/url.service';

class UrlController {
    
    async createShortUrl(request, response) {
        try {
            const { url } = request.body;
            const shortUrl = await UrlService.createShortUrl(url);
            response.json(shortUrl);

        } catch(error) {
            console.log(error);
            response.status(400).send(error);
        }
    }

    async getShortUrl(request, response) {
        try {
            const { id } = request.params;
            const shortUrl = await UrlService.getShortUrl(id);
            if (!shortUrl) {
                response.status(404).send();
            }
            response.json(shortUrl);
            
        } catch(error) {
            console.log(error);
            response.status(400).send(error);
        }
    }

    async redirectToLongUrl(request, response) {
        try {
            const { id } = request.params;
            const shortUrl = await UrlService.getShortUrl(id);
            if (!shortUrl) {
                response.status(404).send();
            }
            response.redirect(shortUrl.url);
        } catch(error) {
            console.log(error);
            response.status(400).send(error);
        }
    }
}

export default new UrlController();