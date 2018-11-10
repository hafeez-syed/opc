function usersFooter() {
	return {
		restrict: 'E',
		templateUrl: 'src/js/app.vortilla.users/template/footer.html'
	}
}

usersFooter.$inject = [];

angular
	.module("app.vortilla.users")
	.directive('usersFooter', usersFooter);