
module.exports = {
  index(req,res){
    res.render('index',{data:'Rendering data from controller'});
  },
  store(erq,res){
    res.render('index',{data:'Rendering data from controller - Store'});
    console.log('storing a user');
  },
  user(erq,res){
    res.render('index',{data:'Rendering data from controller - User'});
    console.log('show all users');
  },
  profile(erq,res){
    res.render('index',{data:'Rendering data from controller - Profile'});
    console.log('show user profile');
  }
}
