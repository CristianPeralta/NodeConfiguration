import bookController from '../controllers/bookController';
import Router from '../server/classRouter';
var routes = new Router();

  routes.get('/indexB',bookController.index);
  routes.get('/storeB',bookController.store);

exports.default = routes;
