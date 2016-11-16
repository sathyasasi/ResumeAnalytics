(function() {
	"use strict";
	angular.module("ResumeAnalyticsApp").factory("ResumeAnalyticsFactory", function($http) {	
	});
})();




/*(function(){
	angular.module(ResumeAnalyticsApp).factory("UserService", UserService);
	function UserService($http){
		var service = {
			createUser: createUser,
			loginUser: loginUser
		};
		return service;
		function createUser(user, callback){
			$http.post("/routes/register", user)
			.success(callback);
		}
		function loginUser(user, callback){
			$http.post("/routes/login", user)
			.success(callback);
		}
	}
})();*/