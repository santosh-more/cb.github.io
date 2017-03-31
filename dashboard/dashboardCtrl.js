app.controller("dashboardCtrl", function($http, $scope, $stateParams, $state) {
    $scope.changePass = function() {
        if ($scope.password === $scope.conform_password) {
            $http({
                url: "http://localhost:8080/passwordChng/" + localStorage.getItem("id"),
                method: "PUT",
                data: {
                	password:$scope.password
                }
            }).then(function(res) {
                console.log(res.status);
                if (res.status == 200) {
                    swal("Password Changed Successfully", "", "success");
                    $state.go("dashboard.articleUser");
                } else {
                    swal("Opps.!", "something went wrong", "error");
                    $state.go("dashboard.articleUser");
                }
            })
        } else {
        	 swal("Opps.!", "password is note matched", "error");
        }
    }
    $scope.logout = function() {
        localStorage.removeItem("id");
        localStorage.removeItem("name")
        $state.go("default.gallary");
    }
});
