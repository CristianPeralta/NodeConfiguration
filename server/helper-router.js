
var get= {};
var post= {};

module.exports = {
  get(path,cb) {
    get[path] = cb;
  },
  post (path,cb){
    post[path] = cb;
  },
  route :{
      'GET':get,
      'POST':post
  }
}
