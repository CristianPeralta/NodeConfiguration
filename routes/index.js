import userController from '../controllers/userController';
import routes from '../server/helper-router';

routes.get('/',userController.index);
routes.get('/store',userController.store);
routes.get('/user',userController.user);

routes.post('/profile',userController.profile);

routes.put('/edit',userController.edit);

exports.default = routes;
