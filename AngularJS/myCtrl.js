var app = angular.module("MyApp", []);

app.controller("myCtrl", function ($scope) {
  $scope.isim = "aaa";
  $scope.soyisim = "bbb";
});

app.directive("testDirective", function () {
  return { template: "<h1>Hello</h1>" };
});

// angular http
https://jsonplaceholder.typicode.com/users