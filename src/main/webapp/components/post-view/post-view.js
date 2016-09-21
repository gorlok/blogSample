angular
  .module('postComponents')
  .component('postView', {
      templateUrl: 'components/post-view/post-view.html',
      controller: postViewController,
      bindings: {
        post: '<'
      }
  });

function postViewController() {
  var vm = this;
}
