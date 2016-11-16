'use strict';
var app = angular.module('ResumeAnalyticsApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/home');
$stateProvider
.state('ResumeAnalytics', {
	url: '/home',
	templateUrl: 'components/ResumeAnalytics/home.html',
	controller: 'homeController'
})

.state('login', {
	url: '/login',
	templateUrl: 'components/ResumeAnalytics/login/login.html',
	controller: 'LoginController'
})
.state('upload',{
		url:'/upload',
		templateUrl:'components/ResumeAnalytics/upload/upload.html',
		controller :'uploadController'
	})

.state('register', {
	url: '/register',
	templateUrl: 'components/ResumeAnalytics/register/Register.html',
	controller: 'registerController'
});
    
console.log("hellojfh");
});
