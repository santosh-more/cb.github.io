 var app = angular.module('app', ['ui.router','ngTable','ui.bootstrap','ngTouch','ngAnimate','ckeditor','ngSanitize']);

 console.log("Angular App Is working...");

 app.config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("main");
     $stateProvider
         .state("main", {
             url: "/main",
             templateUrl: "/",
             controller: "mainCtrl"
         })
         .state("default", {
             url: "/default",
             templateUrl: "./dashboard/Default.html",
             controller: "defaultCtrl",
             abstract: true
         })
         .state("default.gallary", {
             url: "/gallary/",
             templateUrl: "./views/gallary.html",
             controller: "gallaryCtrl"
         })
         .state("login", {
             url: "/login",
             templateUrl: "./views/login.html",
             controller: "loginCtrl"
         })
         .state("signup", {
             url: "/signup",
             templateUrl: "./views/signup.html",
             controller: "signupCtrl"
         })
         .state("default.articleslist", {
             url: "/articleslist/:category",
             templateUrl: "./views/articleList.html",
             controller: "articleCtrl"
         })
         .state("default.articles", {
             url: "/articles/:article",
             templateUrl: "./views/articles.html",
             controller: "gallaryCtrl"
         })
         .state("default.search", {
             url: "/search/:skey",
             templateUrl: "./views/searchview.html",
             controller: "gallaryCtrl"
         })
         .state("dashboard", {
             url: "/dashboard",
             templateUrl: "./dashboard/dashboardUser.html",
             controller: "dashboardCtrl",
             abstract: true
         })
         .state("default.pdfForm", {
             url: "/pdfForm",
             templateUrl: "./views/pdfForm.html",
             controller: "pdfFormCtrl"
         })
         .state("dashboard.article", {
             url: "/article",
             templateUrl: "./views/manageArticles.html",
             controller: "articleCtrl"
         })
         .state("dashboard.passwordChng", {
             url: "/passwordChng/:id",
             templateUrl: "./views/passwordChng.html",
             controller: "dashboardCtrl"
         })
         .state("dashboard.category", {
             url: "/category/",
             templateUrl: "./views/manageCategory.html",
             controller: "categoryCtrl"
         })
         .state("dashboard.addcat", {
             url: "/addcat/",
             templateUrl: "./views/addCatagory.html",
             controller: "categoryCtrl"
         })
         .state("dashboard.articles", {
             url: "/articles/:name",
             templateUrl: "./views/articles.html",
             controller: "articleCtrl"
         })
         .state("dashboard.articleUser", {
             url: "/articleUser/:name",
             templateUrl: "./views/articleUser.html",
             controller: "articleCtrl"
         })
         .state("dashboard.articleUOne", {
             url: "/articleUOne/:article",
             templateUrl: "./views/articles.html",
             controller: "articleOneCtrl"
         })
         .state("dashboard.articleListUser", {
             url: "/articleListUser/",
             templateUrl: "./views/articleListUser.html",
             controller: "articleCtrl"
         })
         .state("dashboard.editArticle", {
             url: "/editArticle/:article",
             templateUrl: "./views/editArticle.html",
             controller: "articleCtrl"
         })
 });

 app.run(function($rootScope, $state) {
     $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
         var id = localStorage.getItem("id");
         var name = localStorage.getItem("name");
         console.log("id :", id, "name:", name);
         console.log(toState.name);
         if (id && toState.name == 'login' && name) {
             event.preventDefault();
             $state.go("dashboard.user");
         }
         /*if (id && toState.name == 'login') {
             event.preventDefault();
             $state.go("dashboard.user");
         }*/
     })
 })