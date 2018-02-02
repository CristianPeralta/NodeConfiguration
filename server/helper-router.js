import path from 'path';

var get= {};
var post= {};
var put= {};
var files = {};

module.exports = {
  get(path,cb) {
    get[path] = cb;

  },
  post (path,cb){
    post[path] = cb;
  },
  put (path,cb){
    put[path] = cb;
  },
  route :{
      'GET':get,
      'POST':post,
      'PUT':put
  }
}
