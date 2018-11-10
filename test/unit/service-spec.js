/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: service-spec.js
 Created on 10/11/18 7:38 AM
 Project: opcentral
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

(function () {
	'use strict';

	describe('users service', function(){

		var usersService;

		beforeEach(angular.mock.module('app.vortilla.users'));
		beforeEach(inject(function ($injector) {
			usersService = $injector.get('usersService');
		}));

		it('should expect selectedUsersList to equal []', function () {
			expect(usersService.selectedUsersList()).toEqual([]);
		});

		it('should expect allUsersList length to be greater than 0', function () {
			expect(usersService.allUsers().length).toBeGreaterThan(0);
		});

		it('should expect selectedUsersList length to be 1', function () {
			usersService.addUsersToSelectedList({id: 1, name: 'John'});
			expect(usersService.selectedUsersList().length).toBe(1);
		});

		it('should expect selectedUsersList length to be 0', function () {
			usersService.removeUsersFromSelectedList({id: 1, name: 'John'});
			expect(usersService.selectedUsersList().length).toBe(0);
		});
	});

})();