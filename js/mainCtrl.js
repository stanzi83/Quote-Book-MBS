/**
 * Created by Michele on 7/29/2015.
 */
var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, newService) {
        $scope.quotes = newService.getData();
        $scope.addQuote = function(text, author){
                newService.addData(text, author);
        } 
        $scope.removeQuote = function(text){
                newService.removeData(text);
        }
        $scope.filterQuote = function(text){
                newService.category(text);
        }
});



