function usersService($q) {
	var deferred = $q.defer();
	var selectedUsers = [];
	var usersList = [{"id":1,"first_name":"Bill","last_name":"Smith","full_name":"Bill Smith"},{"id":3,"first_name":"Stella","last_name":"Kirkwood","full_name":"Stella Kirkwood"},{"id":5,"first_name":"Abigail","last_name":"Metcalfe","full_name":"Abigail Metcalfe"},{"id":26,"first_name":"Audrey","last_name":"Robert","full_name":"Audrey Robert"},{"id":138,"first_name":"Michael","last_name":"Hillgrove","full_name":"Michael Hillgrove"},{"id":161,"first_name":"Connor","last_name":"Perkin","full_name":"Connor Perkin"},{"id":228,"first_name":"Kiara","last_name":"Holder","full_name":"Kiara Holder"},{"id":230,"first_name":"Cooper","last_name":"Wilhelm","full_name":"Cooper Wilhelm"},{"id":251,"first_name":"Zoe","last_name":"Moubray","full_name":"Zoe Moubray"},{"id":410,"first_name":"Lilian","last_name":"Scantlebury","full_name":"Lilian Scantlebury"},{"id":431,"first_name":"Flynn","last_name":"Willshire","full_name":"Flynn Willshire"},{"id":453,"first_name":"Hamish","last_name":"Oatley","full_name":"Hamish Oatley"},{"id":455,"first_name":"Ashley","last_name":"Haugh","full_name":"Ashley Haugh"},{"id":476,"first_name":"Sebastian","last_name":"Duckworth","full_name":"Sebastian Duckworth"},{"id":498,"first_name":"Jett","last_name":"Nash","full_name":"Jett Nash"},{"id":500,"first_name":"Isabella","last_name":"Heading","full_name":"Isabella Heading"},{"id":635,"first_name":"Andrew","last_name":"Kindler","full_name":"Andrew Kindler"},{"id":680,"first_name":"Eve","last_name":"Haller","full_name":"Eve Haller"},{"id":723,"first_name":"Taylah","last_name":"Humffray","full_name":"Taylah Humffray"},{"id":746,"first_name":"Lucy","last_name":"Broger","full_name":"Lucy Broger"}];

	return {
		allUsersListPromise: allUsersListPromise,
		allUsers: allUsers,
		selectedUsersList: selectedUsersList,
		addUsersToSelectedList: addUsersToSelectedList,
		removeUsersFromSelectedList: removeUsersFromSelectedList
	};

	function usersAvatars() {
		return [{"id":1,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":3,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":5,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":26,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":138,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":161,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"},{"id":228,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":230,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":251,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":410,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},{"id":431,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},{"id":453,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"},{"id":455,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":476,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":498,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"},{"id":500,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":635,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":680,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":723,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":746,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}];
	}

	function allUsersListPromise() {
		usersList.map(function (userList) {
			return usersAvatars().forEach(function(userAvatar) {
				if (userList.id === userAvatar.id) {
					userList.avatar = userAvatar.avatar;
					userList.selected = false;
					return usersList;
				}
			})
		});

		deferred.resolve(usersList);

		return deferred.promise;
	}

	function allUsers() {
		return usersList;
	}

	function selectedUsersList() {
		return selectedUsers;
	}

	function addUsersToSelectedList(user) {
		selectedUsers.push(user);
	}

	function removeUsersFromSelectedList(user) {
		selectedUsers = selectedUsers.filter(function(selectedUser) {
			return selectedUser.id !== user.id;
		});
	}

}

usersService.$inject = ['$q'];

angular
	.module("app.vortilla.users")
	.service('usersService', usersService);