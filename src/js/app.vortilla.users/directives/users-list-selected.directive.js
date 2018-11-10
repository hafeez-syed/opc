function usersListSelected() {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'src/js/app.vortilla.users/template/users-list-selected.html'
	}
}

usersListSelected.$inject = [];

angular
	.module("app.vortilla.users")
	.directive('usersListSelected', usersListSelected);