const http = require("http");
const url = require("url");


function onRequest(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
      res.write('Hello World',() => {
        return res.end();
      });
}

exports.init = function (port,hostname) {
  const server = http.createServer(onRequest).listen(port,hostname,()=>{
    console.log(`Listening on http://${hostname}:${port}`);
  })
}
