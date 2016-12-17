myApp.controller('showMentorController', ['mentorFactory', '$location', '$routeParams', showMentorController]);

function showMentorController(mentorFactory, $location, $routeParams){
  var _this = this;

  function showmentor(){
    mentorFactory.showmentor($routeParams.id, function(data){
      _this.showmentor=data;
    })
  }
  showmentor();
}
