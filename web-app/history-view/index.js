'use strict';

var angular = require('angular');

angular.module("history-app")
    .controller('ViewController', require("./controllers/ViewController"))
    .factory("displayService", require("../shared/DisplayService"));
