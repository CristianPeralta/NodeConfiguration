import mongodb from  "mongodb";
const MongoClient = mongodb.MongoClient;

let host   = "127.0.0.1";
let port   = 27017;
let nameDb = "ourDb";
var myCollection;
exports.connect =  function () {

  MongoClient.connect("mongodb://"+host+":"+port+"/", function(err, client) {
    if(err)
    throw err;
    console.log("connected to the mongoDB !");
    let db = client.db(nameDb);
    global.db = client;
  });

}
