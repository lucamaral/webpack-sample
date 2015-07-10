var _ = require("underscore");

var Logger = {
    logList: function(list) {
        _.each(list, Logger.logSingle);
    },
    logSingle: function(item) {
        console.log(item);
    }
};

module.exports = Logger;
