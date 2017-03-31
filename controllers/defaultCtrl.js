app.controller("defaultCtrl", function($scope, $http, $state) {
    $scope.name=localStorage.getItem("name");
    $scope.logout = function() {
        localStorage.removeItem("id");
        localStorage.removeItem("type")
        $state.reload();
    }
});
