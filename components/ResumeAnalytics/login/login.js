
/*var app = angular('ResumeAnalyticsApp', []);
app.service('LoginService', function(){
   this.login = function(LoginValue){
   	return LoginValue;
   	console.log(LoginValue);
   };
});
app.controller('LoginController', function($scope, LoginService){
	$scope.login = function () {
		$scope.result = LoginService.login($scope.LoginValue.username, $scope.LoginValue.password);
	};
});

app.controller('LoginController', ['$scope','$http','$window','$state', function($scope,$http,$window,$state){
/*$scope.LoginValue =
{
	username="",
	password=""
}
	console.log("LoginController");
	$scope.LoginFailed = false;
	var config={};
	$scope.LoginCall=function()
	{
		console.log($scope.LoginValue);
			$state.go('upload');
		/*$window.location.href = '/upload.html';
		$http.post('/login', $scope.LoginValue, config).then($scope.Success,$scope.Error);
	}
	$scope.Success=function(response)
	{
		console.log(response.LoginValue);
		if (response.LoginValue.status === true) 
		{
			if (response.LoginValue.pristine === true) 
			{
				$state.go('home.upload');
				/*$window.location.href = '/upload.html';
			}
			else
				$state.go('home.upload');
				// $window.location.href = '/result.html';
		}

	}
	$scope.Error = function (response)
	{
		console.log(response.LoginValue);
		$scope.LoginFailed = true;
		$scope.LoginForm.password.$setPristine();
	}	
}]);*/


