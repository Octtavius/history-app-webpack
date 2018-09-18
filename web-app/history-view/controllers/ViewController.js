'use strict';

function ViewController($scope, displayService) {
    $scope.title = "View Page";
    displayService.printM();
};

ViewController.$inject = ['$scope', 'displayService'];

// angular.module('history-app').controller('ViewController', ViewController);
module.exports = ViewController;