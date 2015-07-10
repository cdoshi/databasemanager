define(['app'], function(app) {
    app.controller('ctrl1', ['$scope',
    function($scope) {
        $scope.name1 = 'Hello';
        $scope.alerts = [{
            type : 'danger',
            msg : 'Oh snap! Change a few things up and try submitting again.'
        }, {
            type : 'success',
            msg : 'Well done! You successfully read this important alert message.'
        }];
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
        $scope.addAlert = function() {
            $scope.alerts.push({
                msg : 'Another alert!'
            });
        };

    }]);
});
