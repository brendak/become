var mongoose = require('mongoose');
var Mentor = mongoose.model('Mentor');
var Mentee = mongoose.model('Mentee');

function mentorController(){
  this.registerMentor = function(req,res){
    console.log(req.body)
    Mentor.create(req.body, function(err, result) {
      if(err) {
        console.log('There were validation errors', err);
        res.json(err);
      } else {
        console.log('successfully added a mentor!');
        console.log(result);
     res.json(result);
   }
  })
  }
  this.registerMentee = function(req,res){
    console.log(req.body)
    Mentee.create(req.body, function(err, result) {
      if(err) {
        console.log('There were validation errors', err);
        res.json(err);
      } else {
        console.log('successfully added a mentee!');
     res.json(result);
   }
  })
  }
  this.getAllMentors = function(req,res){
    Mentor.find({}, function(err, mentors) {
      if(err) {
      console.log('none');
      } else {
        console.log("Sending mentors from server")
        res.json(mentors);
  }
  })
  }
  this.getAllMentees = function(req,res){
    Mentee.find({}, function(err, mentees) {
      if(err) {
      console.log('none');
      } else {
        console.log("Sending mentees from server")
        res.json(mentees);
  }
  })
  }


  this.loginMentor = function(req,res){
    var errors = {errors:{
      general:{
        message:'Invalid login information'
      }
    }}
    Mentor.findOne({email:req.body.email}).exec(function(err,user){
      if(!req.body.email||!req.body.password || !user){
        res.json(errors)
      }else{
        if(user.password != req.body.password){
          res.json(errors);
        }else{
            req.session.user = {
              name: user.name,
              _id: user._id
            }
            res.send(user);
        }
      }
    })
  }

  this.loginMentee = function(req,res){
    var errors = {message:'Invalid login information'}
    console.log("in server")
    Mentee.findOne({email:req.body.email}).exec(function(err,user){
      if(!req.body.email||!req.body.password || !user){
        res.json(errors)
      }else{
        if(user.password != req.body.password){
          res.json(errors);
        }else{
            // req.session.user = {
            //   name: user.name,
            //   _id: user._id
            // }
            res.send(user);
        }
      }
    })
  }


this.show = function(req,res){
  Mentor.findOne({_id: req.params.id}, function(err, mentor) {
    if(err) {
    console.log('wrong id');
    } else {
      console.log(mentor);
      res.json(mentor);
}
})
}
this.getmentor = function(req,res){
  Mentor.findOne({_id: req.params.id}, function(err, mentor) {
    if(err) {
    console.log('wrong id');
    } else {
      console.log(mentor);
      res.json(mentor);
}
})
}


};

module.exports = new mentorController(); // what does this export?
