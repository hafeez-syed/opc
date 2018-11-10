function usersHeader() {
	return {
		restrict: 'E',
		scope: true,
		bindToController: {
			headerLabel: '@'
		},
		controller: usersHeaderController,
		controllerAs: 'usersHeaderCtrl',
		templateUrl: 'src/js/app.vortilla.users/template/header.html'
	}
}

usersHeader.$inject = [];

function usersHeaderController() {
	var vm = this;
}

usersHeaderController.$inject = [];

angular
	.module("app.vortilla.users")
	.controller('usersHeaderController', usersHeaderController)
	.directive('usersHeader', usersHeader);