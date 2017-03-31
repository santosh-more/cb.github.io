app.controller("articleOneCtrl", function($scope, $http, $state, $stateParams, $uibModal) {
    $scope.getArticle = function() {
            $http({
                url: "http://localhost:8080/getArticle/" + $stateParams.article,
                method: "GET",
            }).then(function(res) {
                $scope.article_ = res.data.docs;
                // $scope.fullstory=
                console.log(res.statusText);
            })
        }
/*Modal Initialization Function*/
    $scope.openModal = function(articleImage) {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^");
        var modalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './views/modalImage.html',
            controller: 'modalCtrl',
            controllerAs: '$ctrl',
            resolve: {
                items: function() {
                    return articleImage;
                }
            }
        });
    };
});
