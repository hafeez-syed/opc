function usersManager() {
	return {
		restrict: 'E',
		scope: true,
		bindToController: {
			usersList: '@'
		},
		controller: usersManagerController,
		controllerAs: 'usersManagerCtrl',
		templateUrl: 'src/js/app.vortilla.users/template/users-manager.html'
	}
}

usersManager.$inject = [];

function usersManagerController(usersService) {
	var vm = this;

	vm.searchText = '';

	vm.classOuter = 'col-xs-12 col-sm-6 col-md-4 col-lg-3';
	vm.classInnerAvatar = 'col-xs-2 col-sm-6 col-md-6 col-lg-4';
	vm.classInnerTitle = 'col-xs-10 col-sm-6 col-md-6 col-lg-8';

	vm.totalUsersSelected = 0;
	vm.usersSelected = [];

	activate();

	function activate() {
		if (!usersService.selectedUsersList().length) {
			usersService.allUsersListPromise()
				.then(function(users) {
					vm.users = users;
					setUsersSelected();
				});
		} else {
			vm.users = usersService.allUsers();
			setUsersSelected();
		}
	}

	vm.userSearch = function (user) {
		if (vm.searchText) {
			return user.full_name.toLowerCase().indexOf(vm.searchText.toLowerCase()) !== -1;
		}

		return true;
	};

	vm.userClicked = function(user) {
		user.selected = !user.selected;

		if (user.selected) {
			usersService.addUsersToSelectedList(user);
		} else {
			usersService.removeUsersFromSelectedList(user);
		}

		setUsersSelected();
	};

	function setUsersSelected() {
		vm.usersSelected = usersService.selectedUsersList();
		vm.totalUsersSelected = vm.usersSelected.length;
	}
}

usersManagerController.$inject = ['usersService'];

angular
	.module("app.vortilla.users")
	.controller('usersManagerController', usersManagerController)
	.directive('usersManager', usersManager);