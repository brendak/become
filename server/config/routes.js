var path = require('path');
var mentors = require('../controllers/mentors.js');

// function loginAuthentication(req,res,next){
//   if (req.session.userId){
//     next();
//   }else{
//     res.status(401).send("User not found");
//   }
// }

module.exports = function(app){
  app.post('/mentor', mentors.registerMentor);
  app.post('/mentee', mentors.registerMentee);
  app.get('/mentor/platform', mentors.getAllMentors);
  app.get('/mentee/platform', mentors.getAllMentees);
  app.post('/mentor/login', mentors.loginMentor);
  app.post('/mentee/login', mentors.loginMentee);

  // app.post('/mentor2', mentors.registerMentor2);
  // app.get('/platform', mentors.platform);
  // app.post('/mentor', mentors.registerMentor);
  // app.get('/getpoem/:id', mentors.getpoem);
  // app.get('/codepoem/:id', mentors.show);
  // app.post('/login', mentors.login);
  // app.use(loginAuthentication);
  // // app.get('/home', users.home);
  // app.get('/dashboard', users.home);
  // app.post('/addtopic', topics.addtopic);
  // app.get('/topics', topics.index);
  // app.get('/topics/:id/', topics.showtopic);
  //
  // // app.post('/user/:id/comments', comments.create);
  // app.post('/logout', users.logout);
};
