import User from '../models/User';

module.exports = {
  index(req,res){
    res.render('index',{data:'Rendering data from controller'});
  },
  create(req,res){
    const data = req.body;
		User.create(data)
			.then((result) => {
        console.log(result);
				return res.json(result);
			})
			.catch((err) => {
        console.log(err);
				return res.send(null,503);
			});
  },
  read(req,res){
		User.read()
			.then((result) => {
        console.log(result);
				return res.json(result);
			})
			.catch((err) => {
        console.log(err);
				return res.send(null,503);
			});
  },
  update(req,res){
    const data = req.body;
		User.findOne(data)
			.then((result) => {
        console.log(result);
				return res.json(result);
			})
			.catch((err) => {
        console.log(err);
				return res.send(null,503);
			});
  },
  delete(req,res){
    User.delete()
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        console.log(err);
        return res.send(null,503);
      })
  }
}
