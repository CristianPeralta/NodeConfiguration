import userController from '../controllers/userController';
import Router from '../server/classRouter';
var routes = new Router();

routes.get('/',userController.index);
routes.get('/store/last',userController.store);
routes.post('/profile',userController.profile);
routes.put('/edit',userController.edit);


export default routes;
