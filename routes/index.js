import userController from '../controllers/userController';
import Router from '../server/classRouter';
var routes = new Router();

routes.get('/',userController.index);
routes.get('/delete',userController.delete);
routes.post('/store',userController.store);
routes.post('/profile',userController.profile);
routes.put('/edit',userController.edit);


export default routes;
