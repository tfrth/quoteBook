var app = angular.module('quoteBook'); //getting the quoteBook module rather than setting it with the [] included

app.controller('mainCtrl', function($scope, myService){  //creating app controller 'mainCtrl' with function() and $scope set as the parameter

$scope.quotes = myService.getData();


$scope.addData = function(){
	var obj = {
		text: $scope.addTo,
		author: $scope.author
	}
  myService.addData(obj);
}

$scope.removeData = function() {
	
	myService.removeData($scope.removeFrom);
}
});





//here we have the $scope and service injected into the controller
//need whatever is available in view 