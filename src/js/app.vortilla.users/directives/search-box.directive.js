function searchBox() {
	return {
		restrict: 'E',
		templateUrl: 'src/js/app.vortilla.users/template/search-box.html'
	}
}

searchBox.$inject = [];

angular
	.module("app.vortilla.users")
	.directive('searchBox', searchBox);