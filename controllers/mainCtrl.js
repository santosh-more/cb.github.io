app.controller("mainCtrl",function($scope,$http,$state){
		console.log("In Main Controller");
		$state.go("default.gallary");
});