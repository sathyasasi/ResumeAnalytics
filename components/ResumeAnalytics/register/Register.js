/*function RegisterCuntroller(UserService){
	var vm = this;
	vm.register = function(user){
		UserService.createUser(user);
	}

}
}();

app.controller('homeController', ['$scope','$http','$window','$state', function($scope,$http,$window,$state){

		vm registerUser = registerUser;
		function registerUser(user){
			console.log("register user");
			$scope.data = {
				username: "",
				password:""
			}
			$scope.loginUserFailed = false;
			var config = {} 

		$http.post('/login', $scope.data, config).then($scope.successCallback, $scope.errorCallback);

		}

}]);*/
 app.service('ContactService', function(){
   var uid =1;
   var users = [{
   	id: 0,
   	'name': 'sathya',
   	'email': 'hello@mail.com',
   	'password': '1234',
   	'password2': '1234'
   }];
   this.save = function(user){
   	console.log("function")
   	if(user.id == null){
   		console.log("function2");
   		user.id = uid++;
   		users.push(user);
   		
   	}
   	else{
   		for(i in users){
   			if(users[i].id == user.id){
   				users[i] = user;
   			}
   		}
   	}
   }
     this.get = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                return users[i];
            }
        }

    }
    
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {

        return users;
    }

});


app.controller('registerController', function($scope, ContactService) {
	console.log("before save user");
	$scope.users = ContactService.list();
	$scope.saveContact = function() {
		console.log("save user");
		ContactService.save($scope.newuser);
		// console.log(newuser);
		$scope.newuser = {};
		console.log("after user")
		
	}
	$scope.users = ContactService.list();
	console.log("user");
	console.log("registerController");
});