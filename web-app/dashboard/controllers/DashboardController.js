'use strict';

function DashboardController($scope, displayService) {
    $scope.title = "Dashboard Page";

    displayService.printM();
};

DashboardController.$inject = ['$scope', 'displayService'];

// angular.module('history-app').controller('DashboardController', DashboardController);
module.exports = DashboardController;