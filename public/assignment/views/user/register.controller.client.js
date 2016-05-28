(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService) {
        var vm = this;
        vm.createUser = createUser;

        function init(){
            vm.mytime = "hello";
        }
        init();

        function createUser(newUser) {
            newUser._id = (new Date).getTime(); //Guaranteed Unique
            if(UserService.unique(newUser._id, newUser.username)) {
               vm.mytime =  UserService.createUser(newUser);
            }else{

            }
        }
    }

})();