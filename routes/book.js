import bookController from '../controllers/bookController';
import routes from '../server/helper-router';

routes.get('/book/index',bookController.index);
routes.get('/book/store',bookController.store);

exports.default = routes;
