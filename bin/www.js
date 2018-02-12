import server from "../server/server";
import db from "../database/connect";
import routes from '../server/helper-router';
import index from '../routes/index';
import book from '../routes/book';
import cfg from '../config';

db.connect(cfg.db);

server.init(cfg.server);

routes.use('/', index);

routes.use('/book', book);
