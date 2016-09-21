angular
  .module('postComponents', ['postModule'])
  .component('postList', {
      templateUrl: 'components/post-list/post-list.html',
      controller: postListController,
      bindings: {
          errores: '='
      }
  });

postListController.$inject = ['postFactory'];
function postListController(postFactory) {
  var vm = this;
  postFactory.getPost().then(function(response) {
    vm.posts = response.data;
  }, function(response){
    vm.errores.push('Connection to API failed with message: ' + response.statusText);
  });
}
