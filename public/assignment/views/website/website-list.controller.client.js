(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.profile = profile;
        vm.test = WebsiteService.websites;
        vm.names=['Jani','Hege','Kai'];

        names=['Jani','Hege','Kai'];


        function init() {
            vm.websites = WebsiteService.findWebsitesForUserId(vm.userId);
        }
        init();

        function profile(){
            $location.url("/profile/"+vm.userId);
        }

        function MyCtrl($scope) {
            vm.websites = WebsiteService.findWebsitesForUserId(vm.userId);
            $scope.items = vm.websites;
        }
    }
})();