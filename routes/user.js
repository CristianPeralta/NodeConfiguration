import userController from '../controllers/userController';

var routes = {};
var get= {};
var post= {};

routes.get = function (path,cb){
  get[path] = cb;
};
routes.post = function (path,cb){
  post[path] = cb;
};

routes.get('/',userController.index);
routes.get('/store',userController.store);
routes.get('/user',userController.user);
routes.post('/profile',userController.profile);

module.exports = {
  'GET':get,
  'POST':post
};