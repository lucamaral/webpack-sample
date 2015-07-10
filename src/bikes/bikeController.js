var BikeService = require("bikes/bikeService");
var Logger = require("utils/logger");

var BikeController = function() {

    this.logAllBikes = function() {
        var bikes = BikeService.get();
        Logger.logList(bikes);
    };

    this.logSingleBike = function(bikeName) {
        var bike = BikeService.find(bikeName);
        Logger.logSingle(bike);
    };

};

/*
  At my company, we use play framework that compile html pages.
  This pages receives params from server and sends to javascript functions/modules
  I did this workaround to access BikeController in html script tag. :(
*/
window.BikeController = BikeController;
module.exports = BikeController;
