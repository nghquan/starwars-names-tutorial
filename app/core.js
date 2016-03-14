// public/core.js
var reportApp = angular.module('reportApp', ['reportApp.controllers']);

angular.module('reportApp.controllers', []).
controller('mainController', ['$scope', '$http',
  function($scope, $http) {
    $scope.tree = [{name: "Node", nodes: []}]; 
    
    $http.get('/api/reports')
        .success(function(result) {
            $scope.tree = result.rs;       
            console.log(result);
        })
        .error(function(result) {
            console.log('Error: ' + result);
        });  
      
    $scope.show = function(data) {
        $http.get('/api/reports' + data.childrenUrl)
        .success(function(result) {
            data.nodes = result.rs;       
            console.log(result);
        })
        .error(function(result) {
            console.log('Error: ' + result);
        }); 
    };
  }]);