
import path from 'path';

var get= {};
var post= {};
var put= {};
var files = {};
var prefix = '';

module.exports = {
  get(path,cb) {
    return get[prefix+path] = cb;
  },
  use(path,obj) {
      if (path != '/') {
        prefix = path;
      }
      for (let method in obj.route) {
        for (let path in obj.route[method]) {
          
          console.log(method+' : '+path+' : '+obj.route[method][path]);
        }
      }
      prefix = '';
  },
  post (path,cb){
    return post[prefix+path] = cb;
  },
  put (path,cb){
    return put[prefix+path] = cb;
  },
  route :{
      'GET':get,
      'POST':post,
      'PUT':put
  }
}
