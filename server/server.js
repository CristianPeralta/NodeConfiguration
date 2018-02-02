import http from "http";
import url from "url";
import helper from "./helper";


function onRequest(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
      res.write('Hello World',() => {
        return res.end();
      });
}

exports.init = function (port,hostname) {
  const server = http.createServer(helper.init).listen(port,hostname,()=>{
    console.log(`Listening on http://${hostname}:${port}`);
  })
}