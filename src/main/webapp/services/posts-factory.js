angular
  .module('postModule', [])
  .constant('API_URL', 'http://localhost:8080/api/blog/posts') //http://jsonplaceholder.typicode.com/posts
  .factory('postFactory', postFactory);

postFactory.$inject = ['$http', 'API_URL'];
function postFactory($http, API_URL) {

  var factory = {};

  factory.getPost = function() {
	  return $http.get(API_URL);
  }

  return factory;

}
