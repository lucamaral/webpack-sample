var CarService = require("cars/carService");
var Logger = require("utils/logger");

var CarController = function() {

    this.logAllCars = function() {
        var cars = CarService.get();
        Logger.logList(cars);
    };
};

/*
  At my company, we use play framework that compile html pages.
  This pages receives params from server and sends to javascript functions/modules
  I did this workaround to access BikeController in html script tag. :(
*/
window.CarController = CarController;
module.exports = CarController;
