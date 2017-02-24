// Intro to Angular

var app = Angular.module('myApp', []);

app.controller('PlayerController', ['$scope', function($scope){

}]);

app.controller('RelatedController', ['$scop', function($scope){
  $scope.audio = document.createElement('audio');
}]);