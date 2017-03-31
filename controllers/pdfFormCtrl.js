app.controller("pdfFormCtrl", function($http, $scope, $stateParams, $state) {
    console.log("PDF FORM CONTROLLER");
    $scope.fillpdf = function() {
        console.log("Fill pdf method invoked successfully");
        $http({
            url: "http://localhost:8080/pdffillform",
            method: "GET"
        }).then(function(res) {
            console.log(res.status);
            if (res.status != 500) {
                swal("PDF filled Successfully", "", "success");
                //$state.go("dashboard.articleUser");
            } else {
                swal("Opps.!", "PDF not filled", "error");
                //$state.go("dashboard.articleUser");
            }
        })
    }
})
