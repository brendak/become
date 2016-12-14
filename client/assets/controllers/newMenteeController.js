
myApp.controller('newMenteeController', ['mentorFactory', '$location', '$routeParams', newMenteeController]);

function newMenteeController(mentorFactory, $location, $routeParams){
  var _this = this;
  function setMentees(data){
    _this.mentees = data;
    _this.mentee = {};
  }
  this.mentees = {};
  this.mentee = {};

  mentorFactory.getmentees(setMentees);

  this.registerMentee = function(){
    mentorFactory.registerMentee(this.mentee, function(data){
      if(data.hasOwnProperty('errors')){
        this.regErrors = data.errors
      } else {
        $location.path('/mentee/platform');
      }
    })
  }

  this.loginMentee = function(user){
    mentorFactory.loginMentee(user, function(data){
      if(data.hasOwnProperty("errors")){
        this.loginErrors = data.errors
        } else {
          $location.path('/mentee/platform');
        }
      })
    }

  this.editmentee = function(){
    mentorFactory.editmentee(this.mentee);
  };

  this.showmentee = function(){
    mentorFactory.showmentee($routeParams.id, this.mentee);
  };

  this.deletementee = function(id){
    mentorFactory.deletementee(id,setMentees);
  };
}
