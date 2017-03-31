app.controller("categoryCtrl", function($scope, $http, $state) {
    console.log("categoryCtrl")
    $scope.name = localStorage.getItem("name");
    $scope.addCat = function() {
        var catData = new FormData(document.getElementById('addcat'));
        $http({
            url: "http://localhost:8080/addCat",
            method: "POST",
            data: catData,
            headers: {
                "Content-Type": undefined
            }
        }).then(function(res) {
            swal("Hey "+$scope.name,"Category added successfully..", "success");
            console.log(res.statusText);
            $state.go("dashboard.category", { reload: true });
        })
    }
    $scope.getCat = function() {
        $http({
            url: "http://localhost:8080/getCat/" + $scope.name,
            method: "GET",
        }).then(function(res) {
            $scope.category_ = res.data.docs;
            console.log($scope.category_);
            console.log(res.statusText);
        })
    }
    $scope.deleteCat = function(cat) {
        $http({
            url: "http://localhost:8080/deleteCat/" + cat,
            method: "DELETE",
        }).then(function(res) {
            console.log(res.data.docs.category, "deleted successfully");
            console.log(res.statusText);
            swal("Hey "+$scope.name,"category deleted Successfully", "success");
            $state.reload();
        })
    }
});
