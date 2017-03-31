app.controller("articleCtrl", function($scope, $http, $state, $stateParams, NgTableParams, $uibModal) {
    console.log("articleCtrl");
    $scope.name = localStorage.getItem("name");
    $scope.getCatAll = function() {
        $http({
            url: "http://localhost:8080/getCatAll",
            method: "GET",
        }).then(function(res) {
            $scope.category_All = res.data.docs;
            console.log($scope.category_All[0].category);
        })
    }
    $scope.addArticle = function() {
        var articleData = new FormData(document.getElementById("article"));
        articleData.append('fullstory', $scope.fullstory);
        articleData.append('description', $scope.description);
        console.log($scope.keywords);
        console.log(article);
        $http({
            url: "http://localhost:8080/addArticle",
            method: "POST",
            data: articleData,
            headers: {
                "Content-Type": undefined
            }
        }).then(function(res) {
            swal('Article added successfully..');
            $state.go("dashboard.articleUser");
            console.log(res.statusText);
        })
    }
    $scope.getArticleList = function() {
        $http({
            url: "http://localhost:8080/getArticleList/" + $stateParams.category,
            method: "GET",
        }).then(function(res) {
            $scope.articleCat = res.data.docs;
            console.log($scope.articleCat);
            console.log(res.statusText);
            //var self = this;
            var data = $scope.articleCat;
            $scope.tableParams = new NgTableParams({}, { dataset: data });
        })
    }
    $scope.getArticleUser = function() {
        console.log("IN GETUSERARTICLE METHOD");
        $http({
            url: "http://localhost:8080/getArticleUser/" + $scope.name,
            method: "GET",
        }).then(function(res) {
            $scope.articleUser = res.data.docs;
            console.log($scope.articleUser);
            console.log(res.statusText);
        })
    }
    $scope.deleteArticle = function(articleid) {
        console.log("IN deleteArticle METHOD");
        $http({
            url: "http://localhost:8080/deleteArticle/" + articleid,
            method: "DELETE",
        }).then(function(res) {
            swal('Article deleted successfully..');
            $state.reload();
            console.log(res.statusText);
        })
    }
    $scope.getArticle = function(article_edt) {
        $http({
            url: "http://localhost:8080/getArticle/" + $stateParams.article,
            method: "GET",
        }).then(function(res) {
            $scope.article_ = res.data.docs;
            //$scope.tags = $scope.article_.keywords.toString();
            console.log(res.statusText);
            console.log(res.data.docs);
        })
    }
    $scope.editArticle = function(articleid) {
        var articleData = new FormData(document.getElementById("article"));
        articleData.append('fullstory', $scope.article_.fullstory);
        articleData.append('description', $scope.article_.shortDesc);
        // console.log($scope.keywords);
        $http({
            url: "http://localhost:8080/editArticle/" + articleid,
            method: "PUT",
            data: articleData,
            headers: {
                "Content-Type": undefined
            }
        }).then(function(res) {
            swal('Article updated successfully..');
            $state.go("dashboard.articleUser");
            console.log(res.statusText);
        })
    }

    /*$scope.options = {
        language: 'en',
        allowedContent: true,
        entities: false
        // toolbar: '',
        / this does the magic /
        //uiColor : '#9AB8F3'
    };*/
});
