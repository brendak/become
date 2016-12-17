
myApp.controller('showMenteeController', ['mentorFactory', '$location', '$routeParams', showMenteeController]);

function showMenteeController(mentorFactory, $location, $routeParams){
  var _this = this;

  function showmentee(){
    mentorFactory.showmentee($routeParams.id, function(data){
      _this.showmentee=data;
    })
  }
  showmentee();
}
