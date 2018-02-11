import server from "../server/server";
import db from "../database/connect";
import index from '../routes/index';
import routes from '../server/helper-router';

const port = 3000;
const hostname = "0.0.0.0";

let hostDb   = "127.0.0.1";
let portDb   = 27017;
let nameDb = "ourDb";

routes.use('/user', index);

db.connect(hostDb,portDb,nameDb);

server.init(port,hostname);
