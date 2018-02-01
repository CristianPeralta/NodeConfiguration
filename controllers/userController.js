
module.exports = {
  index(req,res){
    res.render('index',{data:'Rendering data from controller'});
  },
  store(erq,res){
    console.log('storing a user');
  },
  user(erq,res){
    console.log('show all users');
  }
}
