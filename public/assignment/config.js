(function(){
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home.html"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                title: "Login",
                controllerAs: "model"
            })
            .when("/profile/:id", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                title: "Profile",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                title: "Register",
                controllerAs: "model"
            })
            .when("/user/:userId/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                title: "Website List",
                controllerAs: "model"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                title: "New Website",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                title: "Edit Website",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                title: "Widget List",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });
    }
})();