const path = require('path');
      route = require('./routes');
      url = require('url');


exports.route = function (pathName,req,res) {

  console.log(req.method+' : '+pathName);

  let method = req.method;
  if (typeof route[method][pathName] === 'function') {
    return route[method][pathName](req,res);
  }else {
      console.log('404, '+ pathName+' Not Found');
      res.writeHead(404,{'Content-Type':'text/html'});
      res.write('404, '+ pathName+' Not Found',function () {
        return res.end();
      });
  }

}
