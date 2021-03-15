var myApp = angular.module("myApp", []);
myApp.controller("firstController", function($scope) {
    $scope.name = "Yogesh";
    $scope.changeName = function() {
        $scope.name = "Yogesh Salvi";
    }
});