app.controller("gallaryCtrl", function($scope, $http, $state, $stateParams,$uibModal) {
    // $state.go("default.gallary");
    $scope.getCat = function() {
        $http({
            url: "http://localhost:8080/getCatAll",
            method: "GET",
        }).then(function(res) {
            $scope.category_ = res.data.docs;
            console.log(res.statusText);
        })
    }
    $scope.getArticles = function() {
        $http({
            url: "http://localhost:8080/allArticles",
            method: "GET",
        }).then(function(res) {
            $scope.articles = res.data.docs;
            console.log($scope.articles);
            console.log(res.statusText);
        })
    }
    $scope.getArticle = function() {
        $http({
            url: "http://localhost:8080/getArticle/" + $stateParams.article,
            method: "GET",
        }).then(function(res) {
            $scope.article_ = res.data.docs;
            // $scope.fullstory=
            console.log(res.statusText);
            console.log($scope.article_);
            $scope.temp = "test";
        })
    }
    $scope.count = function(cat) {
        var count = 0;
        angular.forEach($scope.articles, function(value, key) {
            for (var i = 0; i < value.category.length; i++) {
                if (value.category[i] == cat) count++;
            }
        });
        return count;
    }
    $scope.search = function(searchkey) {
        $state.go("default.search", { skey: searchkey });
    }
    $scope.searchArticle = function() {
            console.log("function called......", $stateParams.skey);
            $http({
                url: "http://localhost:8080/search/" + $stateParams.skey,
                method: "GET",
            }).then(function(res) {
                $scope.search = res.data.docs;
                console.log($scope.search);
                // $state.go("default.searchview");
            })
        }
        /*MODAL*/
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
