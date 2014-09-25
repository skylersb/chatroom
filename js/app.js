var app = angular.module('chatRoom', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});