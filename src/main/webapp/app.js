angular
  .module('blogApp', ['postComponents'])
  .controller('AppController', AppController);

  function AppController() {
    var vm = this;
    vm.errores = [];
    vm.prueba = "Esto es una prueba";
    vm.clearErrors = function() {
    	vm.errores = [];
    };
  }
