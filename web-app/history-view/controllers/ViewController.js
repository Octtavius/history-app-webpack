'use strict';

function ViewController($scope) {
    $scope.title = "View Page"
};

ViewController.$inject = ['$scope'];

// angular.module('history-app').controller('ViewController', ViewController);
module.exports = ViewController;