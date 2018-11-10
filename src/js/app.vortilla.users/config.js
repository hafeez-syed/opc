function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $stateProvider
    .state("home", {
      url: "/",
      template: '<users-manager users-list="all"></users-manager>'
    })
    .state("selectedusers", {
      url: "/selectedusers",
      template: '<users-manager users-list="selected"></users-manager>'
    });

  $urlRouterProvider.otherwise('/');
}

angular
	.module("app")
	.config(config);
