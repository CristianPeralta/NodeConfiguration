import server from "./server";
import db from "./database/config";

const port = 3000;
const hostname = "0.0.0.0";
db.connect();
server.init(port,hostname);
