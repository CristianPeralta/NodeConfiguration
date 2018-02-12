import mongodb from  "mongodb";

const MongoClient = mongodb.MongoClient;

exports.connect =  function ({host,port,name}) {

  MongoClient.connect("mongodb://"+host+":"+port+"/", function(err, client) {
    if(err)
      throw err;
    console.log("Connected to the mongoDB ! -> mongodb://"+host+":"+port+"/"+name);
    let db = client.db(name);
    global.db = client;
  });

}
