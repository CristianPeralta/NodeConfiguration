module.exports = {
  index(req,res){
    res.render('index',{data:'BOOK CONTROLLER'});
  },
  store(req,res){
    res.render('index',{data:'BOOK CONTROLLER - Store'});
    console.log('storing a user');
  }
}
