var mongoose = require('mongoose');
var Mentor = mongoose.model('Mentor');
var Mentee = mongoose.model('Mentee');

function mentorController(){
  this.registerMentor = function(req,res){
    console.log(req.body)
    Mentor.create(req.body, function(err, result) {
      if(err) {
        res.json(err);
      } else {
     res.json(result);
   }
  })
  }
  this.registerMentee = function(req,res){
    console.log(req.body)
    Mentee.create(req.body, function(err, result) {
      if(err) {
        res.json(err);
      } else {
     res.json(result);
   }
  })
  }
  this.getAllMentors = function(req,res){
    Mentor.find({}, function(err, mentors) {
      if(err) {
        res.json(err);
      } else {
        res.json(mentors);
  }
  })
  }
  this.getAllMentees = function(req,res){
    Mentee.find({}, function(err, mentees) {
      if(err) {
        res.json(err);
      } else {
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
              name: user.first,
              _id: user._id
            }
            res.json(user);
        }
      }
    })
  }
this.loginMentee = function(req,res){
    var errors = {errors:{
      general:{
        message:'Invalid login information'
      }
    }}
  Mentee.findOne({email:req.body.email}).exec(function(err,user){
    if(!req.body.email||!req.body.password||!user){
      res.json(errors)
    } else {
        if(user.password != req.body.password){
        res.json(errors);
        } else{
        req.session.user = {
          first: user.first,
          id: user._id
        }
        res.json(user);
        }
    }
  })
}
this.logout = function(req,res){
  Mentee.findOne({_id: req.session.userId}).exec(function(err, user){
    if (err){
      res.status(500).send("Failure");
    } else{
      req.session.destroy(function(){
        req.session=null;
      })
      res.json(user);
    }
})
},

this.logoutTwo = function(req,res){
  Mentor.findOne({_id: req.session.userId}).exec(function(err, user){
    if (err){
      res.status(500).send("Failure");
    } else{
      req.session.destroy(function(){
        req.session=null;
      })
      res.json(user);
    }
})
},

this.filtermentees = function(req, res){
Mentee.find({focus:req.body.focus}, function(err, user){
      if(err) {
        console.log("none found")
      }
      else{
          res.json(user);
      }
    })
  }

  this.filtermentors = function(req, res){
  Mentor.find({focus:req.body.focus}, function(err, user){
        if(err) {
          console.log("none found")
        }
        else{
            res.json(user);
        }
      })
    }

  this.showmentee = function(req,res){
    console.log(req.params.id)
    Mentee.findOne({_id: req.params.id}, function(err, mentee) {
      if(err) {
      console.log('Could not find');
      } else {
        res.json(mentee);
  }
  })
  }

  this.showmentor = function(req,res){
    Mentor.findOne({_id: req.params.id}, function(err, mentor) {
      if(err) {
        console.log('Could not find');
      } else {
        res.json(mentor);
  }
  })
  }

};

module.exports = new mentorController();


// this.show = function(req,res){
//   Mentor.findOne({_id: req.params.id}, function(err, mentor) {
//     if(err) {
//     console.log('wrong id');
//     } else {
//       console.log(mentor);
//       res.json(mentor);
// }
// })
// }
// this.getmentor = function(req,res){
//   Mentor.findOne({_id: req.params.id}, function(err, mentor) {
//     if(err) {
//     console.log('wrong id');
//     } else {
//       console.log(mentor);
//       res.json(mentor);
// }
// })
// }


// this.filtermentors = function(req, res){
// Mentor.find({focus:req.body.focus}, function(err, user){
//       if(err) {
//         console.log("none found")
//       }
//       else{
//           res.json(user);
//       }
//     })
//   }
