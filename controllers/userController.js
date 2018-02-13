import User from '../models/User';

module.exports = {
  index(req,res){
    res.render('index',{data:'Rendering data from controller'});
  },
  store(req,res){
    const data = req.body;
		User.register(data)
			.then((result) => {
        console.log(result);
				return res.json(result);
			})
			.catch((err) => {
        console.log(err);
				return res.send(null,503);
			});
  },
  getUsers(req,res){
		User.getAll()
			.then((result) => {
				return res.json(result);
			})
			.catch((err) => {
        console.log(err);
				return res.send(null,503);
			});
  },
  profile(req,res){
    res.render('index',{data:'Rendering data from controller - Profile'});
    console.log(req.body);
  },
  edit(req,res){
    res.render('index',{data:'Rendering data from controller - Edit'});
    console.log(req.body);
  },
  delete(req,res){
    User.delete()
      .then((result) => {
        return res.send();
      })
      .catch((err) => {
        console.log(err);
        return res.send(null,503);
      })
  }
}
