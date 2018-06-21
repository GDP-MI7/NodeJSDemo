var express = require('express');
var router = express.Router();
const User = require("../model/user")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.post('/addUser', function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err,result){
    if(err){
      return res.status(403).json({msg : "error occured"})
    }
    return res.status(200).json({msg : "Record inserted"})
  })

});

/* GET home page. */
router.get('/getUsersList', function(req, res) {
  User.find({},function(err,results){
    if(err){
      return res.status(403).json({msg : "error occured"})
    }
    return res.status(200).json({msg : "Record fetched", data: results})
  })

});

module.exports = router;
