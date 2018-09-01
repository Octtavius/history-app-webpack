'use strict';

function DashboardController($scope) {
    $scope.title = "Dashboard Page"
};

DashboardController.$inject = ['$scope'];

// angular.module('history-app').controller('DashboardController', DashboardController);
module.exports = DashboardController;