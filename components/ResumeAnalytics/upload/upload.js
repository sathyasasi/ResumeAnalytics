/*angular.module('ResumeAnalyticsApp', []).
controller('uploadeController',['$scope','$http', function.upload = fuction(){
	$http.post('upload.ashx', $scope.files.{
		headers:{'Content-Type':'multipart/form-data'}
	})
	.success(fuction(d){
		console.log(d);
	})
}])*/
app.directive('fileModel', ['$parse', function($parse){
   return {
   	restrict: 'A',
   	lingk: function(scope, element, attrs){
   		var model = $parse(attrs.fileModel);
   		var modelSetter = model.assign;
   		element.bind('change', function(){
   			scope.$apply(function(){
   				modelSetter(scope, element[0].files[0]);
   			});
   		});
   	}
   };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        console.log("upload successfully");
        /*$http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })*/
        .success(function(){
        })
        .error(function(){
        });
    }
}]);

app.controller('uploadController', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        //var uploadUrl = "/fileUpload";
        //fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    console.log("uploadController");
    
}]);
