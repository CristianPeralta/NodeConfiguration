"use strict";

import path from 'path';

var get= {};
var post= {};
var put= {};
var files = {};

module.exports = {
  get(path,cb) {
    return get[path] = cb;
  },
  post (path,cb){
    return post[path] = cb;
  },
  put (path,cb){
    return put[path] = cb;
  },
  prefix (pre,arrCb){
    let arrAll = arrCb();
    for (var prop in arrAll){
      arrAll[prop]();
    }
  },
  route :{
      'GET':get,
      'POST':post,
      'PUT':put
  }
}
