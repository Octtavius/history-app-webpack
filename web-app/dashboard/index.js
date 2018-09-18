'use strict';

var angular = require('angular');

angular.module("history-app")
    .controller('DashboardController', require("./controllers/DashboardController"))
    .factory("displayService", require("../shared/DisplayService"));