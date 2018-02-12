import mongodb from "mongodb";
import connect from "../database/connect";

const ObjectID = mongodb.ObjectID;
var users;

module.exports.register = (data) => {
  users = global.db.collection("users");
  let {email, name } = data;
  let user = {email, name };
  return new Promise((resolve,reject)=> users.insert(user,(err,result)=>{
      if(err) reject(err);
      resolve(result.ops[0]);
  } ))
};


module.exports.delete = () => {
  users = global.db.collection("users");
  return new Promise((resolve,reject)=> users.remove((err,result) => {
    if (err) reject(err);
    resolve(result.result);
  }))
};
