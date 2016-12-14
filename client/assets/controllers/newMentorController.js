
myApp.controller('newMentorController', ['mentorFactory', '$location', '$routeParams', newMentorController]);

function newMentorController(mentorFactory, $location, $routeParams){
  var _this = this;
  function setMentors(data){
    _this.mentors = data;
    _this.mentor = {};
  }
  this.mentors = {};
  this.mentor = {};

  mentorFactory.getmentors(setMentors);

  this.registerMentor = function(){
    mentorFactory.registerMentor(this.mentor, function(data){
      if(data.hasOwnProperty('errors')){
        this.regErrors = data.errors
      } else {
        $location.path('/mentor/platform');
      }
    })
  }

  this.loginMentor = function(user){
    mentorFactory.loginMentor(user, function(data){
      if(data.hasOwnProperty('errors')){
        this.loginErrors = data.errors
        } else {
          $location.path('/mentor/platform');
        }
      })
    }


  this.editmentor = function(){
    mentorFactory.editmentor(this.mentor);
  };

  this.showmentor = function(){
    mentorFactory.showmentor($routeParams.id, this.mentor);
  };

  this.deletementor = function(id){
    mentorFactory.deletementor(id,setMentors);
  };
}
