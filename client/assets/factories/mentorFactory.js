myApp.factory('mentorFactory', ['$http', function($http){
var factory = {}

factory.getmentors = function(callback){
  $http.get('/mentor/platform').then(function(returned_data){
    console.log("These are all the mentors")
    console.log(returned_data.data)
    callback(returned_data.data)
  })
}

factory.getmentees = function(callback){
  $http.get('/mentee/platform').then(function(returned_data){
    console.log("These are all the mentees")
    console.log(returned_data.data)
    callback(returned_data.data)
  })
}

factory.registerMentor = function(user, callback){
  $http.post('/mentor', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.registerMentee = function(user, callback){
  $http.post('/mentee', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginMentor = function(user, callback){
  console.log('login Mentory Factory')
  $http.post('/mentor/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginMentee = function(user, callback){
  console.log('login mentee Factory')
  $http.post('/mentee/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.getmentor = function(id, callback){
  $http.get('/getmentor/'+id).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.show = function(id, callback){
  $http.get('/codementor/'+id).then(function(returned_data){
    callback(returned_data.data);
  })
}


return factory;
}]);
