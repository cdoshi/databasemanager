define(['angular', 'angularRoute', 'angularAMD', 'bootstrap', 'bootstraptpl'], function(angular, ngRoute, angularAMD) {
    "use strict";

    var app = angular.module('mainApp', ['ui.bootstrap', 'ngRoute']);

    app.controller('menuCtrl', function($scope, $modal, $log) {
        $scope.navbarCollapsed = true;

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function(size) {

            var modalInstance = $modal.open({
                animation : $scope.animationsEnabled,
                templateUrl : 'signUpModalContent.html',
                controller : 'modalInstanceCtrl',
                size : size,
                resolve : {
                    items : function() {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    });
    
    var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
app.directive("compareTo", compareTo);

    // Please note that $modalInstance represents a modal window (instance) dependency.
    // It is not the same as the $modal service used above.

    app.controller('modalInstanceCtrl', function($scope, $modalInstance) {

        $scope.sendReq = function() {
            $scope.submitted = true;

        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });


    app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/view1', angularAMD.route({
            templateUrl : 'views/view1.html',
            controller : 'ctrl1',
            controllerUrl : 'controller/ctrl1'
        })).when('/view2', angularAMD.route({
            templateUrl : 'views/view2.html',
            controller : 'ctrl2',
            controllerUrl : 'controller/ctrl2'
        })).otherwise({
            redirectTo : '/'
        });
    }]);

    return angularAMD.bootstrap(app);

});
