app.controller("signupCtrl", function($scope, $http, $state) {
    $scope.signup = function() {
        console.log("Hey this is Signup Controller");
        $scope.postdata={};
        $scope.postdata.email = $scope.email; 
        $scope.postdata.name = $scope.name; 
        $scope.postdata.gneder = $scope.gneder; 
        $scope.postdata.dob = $scope.dob; 
        $scope.postdata.password = $scope.password; 
        $scope.postdata.confpassword = $scope.confpassword; 
        if ($scope.password == $scope.confpassword) {
            $http({
                url: "http://localhost:8080/signup",
                method: "POST",
                data: $scope.postdata,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function(res) {
                console.log("Response is coming ", res.statusText);
                $state.go("login");
            }).then(function(err) {
                console.log(err);
            });
        }
    }
});
