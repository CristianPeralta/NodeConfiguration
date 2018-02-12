import path from 'path';
import router from './router';

var _get= {};
var _post= {};
var _put= {};
var files = {};
var prefix = '';
var routes = {
  'GET': _get,
  'POST':_post,
  'PUT':_put
};

function get(path,cb) {
    _get[path] = cb;
}
function post(path,cb) {
    _post[path] = cb;
}
function put(path,cb) {
    _put[path] = cb;
}

module.exports = {
  use(pre,obj) {

      if (pre != '/') {
        prefix  = pre;
      }
      for (let method in obj.route) {
        for (let path in obj.route[method]) {
          switch (method) {
            case 'GET':get(prefix+path,obj.route[method][path]);break;
            case 'POST':post(prefix+path,obj.route[method][path]);break;
            case 'PUT':put(prefix+path,obj.route[method][path]);break;
            default:

          }
          //console.log(method+' : '+pre+path+' : '+obj.route[method]);
        }
      }
      prefix = '';
      router.init();
  },
  route (){
    return {
    'GET': _get,
    'POST':_post,
    'PUT':_put
    }
  }
}
