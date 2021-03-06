(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;
        vm.init = init;
        vm.close = close;

        function init() {
            vm.website = WebsiteService.findWebsiteUserWebsiteId(vm.userId, vm.websiteId);
            //vm.name = vm.website.name;
            //vm.description = vm.website.description;
        }
        init();

        function close(){
            vm.success = false;
        }

        function deleteWebsite(websiteId) {
            var result = WebsiteService.deleteWebsite(websiteId);
            if(result) {
                $location.url("/user/"+vm.userId+"/website");
            } else {
                vm.error = "Unable to delete website";
            }
        }

        function updateWebsite(name,description) {
            var result = WebsiteService.updateWebsite(vm.websiteId, name, description);
            if(result) {
                $location.url("/user/"+vm.userId+"/website");
            } else {
                vm.error = "Unable to update website";
            }
        }
    }
})();