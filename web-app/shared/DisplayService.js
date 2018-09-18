'use strict';

function DisplayService() {
    var printMessage = function() {
        console.log("hello from DisplayService");
    };

    return {
        printM: printMessage
    }
};

DisplayService.$inject = [];

module.exports = DisplayService;