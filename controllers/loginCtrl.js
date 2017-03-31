app.controller("loginCtrl", function($scope, $http, $state) {
    $scope.login = function() {
        $scope.postdata = {};
        $scope.postdata.email = $scope.email;
        $scope.postdata.password = $scope.password;
        $http({
            url: "http://localhost:8080/login",
            method: "POST",
            data: $scope.postdata,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(res) {
            console.log(res);
            if (res.data.doc !== null) {
                if (res.data.doc.email == $scope.email && res.data.doc.password == $scope.password) {
                    localStorage.setItem("id", res.data.doc._id);
                    localStorage.setItem("name", res.data.doc.name);
                    swal("Welcome","Successfully Logged in", "success");
                    $state.go("dashboard.articleUser");
                }
            } else {
                swal("Opps !","Invalid Username or password", "error");
                $state.go("main");
            }
        })
    }
});
