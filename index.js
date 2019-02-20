"user strict";

var app = angular.module('app', []);

app.controller("IndexController", ['$scope', 'animateScroll', function ($scope, animateScroll) {
        $scope.animateScroll = animateScroll;
        
        $scope.pasadoCuatroMayo2018=function() {
            var cuatroMayo2018 = new Date('2018-05-04T00:00:01Z');
            var ahora=new Date();
            return ahora.getTime()>cuatroMayo2018.getTime();
        }
        

        
}]);