import server from "../server/server";
import db from "../database/connect";
import routes from '../server/helper-router';
import index from '../routes/index';
import book from '../routes/book';

const port = 3000;
const hostname = "0.0.0.0";

let hostDb   = "127.0.0.1";
let portDb   = 27017;
let nameDb = "ourDb";

db.connect(hostDb,portDb,nameDb);

server.init(port,hostname);

routes.use('/', index);

routes.use('/book', book);
