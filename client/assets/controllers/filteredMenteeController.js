console.log("I'minit")
myApp.controller('filteredMenteeController', ['mentorFactory', '$location', '$routeParams', '$filter', filteredMenteeController]);

function filteredMenteeController(mentorFactory, $location, $routeParams, $filter){
  console.log("Inthefunc")
  var _this = this;
  console.log(mentorFactory);
  this.getit = function(){
    mentorFactory.getit(function(data){
      _this.mentees=data;
      console.log(data);
    })
  }
 this.getit();

}



  // mentorFactory.getmentees(setMentees);

  // function filteredmentees(user){
  //   mentorFactory.filteredmentees(user, function(data){
  //     _this.mentees=data;
  //     console.log(data)
  //
  //   })
  // }
  // filteredmentees();
