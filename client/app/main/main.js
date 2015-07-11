angular.module('mainCtrl', [])

.controller('mainController', function (Rooms, Users) {

	var vm = this;
	vm.rooms=null;
	vm.users=null;

	vm.getRooms = function(){
		Rooms.getRooms()
			.then(function(rooms){
				vm.rooms = rooms;
			});
	};
	vm.getRooms();


	vm.getUsers = function(){
		Users.getUsers()
			.then(function(users){
				vm.users =  users;
			});
	};
	vm.getUsers();

});