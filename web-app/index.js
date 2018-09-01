'use strict';

var angular = require("angular");
import uiRouter from 'angular-ui-router';

var ConfigRouter = require("./routing");

angular.module("history-app", [uiRouter])
    .config(ConfigRouter);

require("./history-view");
require("./dashboard/index");
