import { Router } from 'express';
import UrlController from '../controllers/url.controller';

const router = new Router();
router.get('/raw/:id', UrlController.getShortUrl);
router.get('/:id', UrlController.redirectToLongUrl);
router.post('/', UrlController.createShortUrl);

export default router;