function usersListAll() {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'src/js/app.vortilla.users/template/users-list-all.html'
	}
}

usersListAll.$inject = [];

angular
	.module("app.vortilla.users")
	.directive('usersListAll', usersListAll);