"use strict";

import userController from '../controllers/userController';
import routes from '../server/helper-router';

routes.get('/',userController.index);
routes.get('/store',userController.store);
routes.get('/user',userController.user);

routes.post('/profile',userController.profile);

routes.put('/edit',userController.edit);

// routes.get('/mystore',userController.store),
// routes.post('/myprofile',userController.profile),
// routes.put('/myedit',userController.edit)

routes.prefix('/user',function () {
  return {
    store: function (){
      return routes.get('/mystore',userController.store)
    },
    profile: function (){
      return routes.post('/myprofile',userController.profile)
    },
    edit: function (){
      return routes.put('/myedit',userController.edit)
    }
  };
}
);

exports.default = routes;
