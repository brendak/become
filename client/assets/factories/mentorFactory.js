myApp.factory('mentorFactory', ['$http', function($http){
var factory = {}

factory.getmentors = function(callback){
  $http.get('/mentor/platform').then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.getmentees = function(callback){
  $http.get('/mentee/platform').then(function(returned_data){
    callback(returned_data.data);
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
  $http.post('/mentor/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginMentee = function(user, callback){
  $http.post('/mentee/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.filteredmentees = function(user, callback){
  $http.post('/mentor/filteredmentees', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.filteredmentors = function(user, callback){
  $http.post('/mentor/filteredmentors', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.showmentee = function(id, callback){
  $http.get('/showmentee/'+id).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.showmentor = function(id, callback){
  $http.get('/showmentor/'+id).then(function(returned_data){
    callback(returned_data.data);
  })
}

// factory.show = function(id, callback){
//   $http.get('/codementor/'+id).then(function(returned_data){
//     callback(returned_data.data);
//   })
// }

factory.logout = function(user,callback) {
  $http.post('/logout', user).then(function(returned_data){
    callback(returned_data.data);
  })
}
factory.logoutTwo = function(user,callback) {
  $http.post('/logoutTwo', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.getit = function(callback){
  $http.get('/mentor/filtermentees').then(function(returned_data){
    callback(returned_data.data);
  })
}


return factory;
}]);
