app.controller('modalCtrl', function($scope,$uibModalInstance, items) {
    // var $ctrl = this;
    $scope=this;
    $scope.item = items;
    /*$scope.selected = {
        item: $scope.items
    };*/
    console.log($scope.item);
    $scope.ok = function() {
        $uibModalInstance.close();
    };
/*
    $scope.cancel = function() {
        $uibModalInstance.dismiss();
    };*/

});
