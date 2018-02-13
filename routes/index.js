import userController from '../controllers/userController';
import Router from '../server/classRouter';
var routes = new Router();

routes.get('/',userController.index);
routes.post('/store',userController.store);
routes.get('/delete',userController.delete);
routes.get('/users',userController.getUsers);
routes.put('/edit',userController.edit);


export default routes;
