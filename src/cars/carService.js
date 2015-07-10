var CarService = {
    get: function() {
        var cars = require("json!cars/cars").cars;
        return cars;
    }
};

module.exports = CarService;
