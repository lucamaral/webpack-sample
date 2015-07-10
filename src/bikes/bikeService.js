var _ = require("underscore");

var BikeService = {
    get: function() {
        var bikes = require("json!bikes/bikes").bikes;
        return bikes;
    },
    find: function(bikeName) {
        return _.find(BikeService.get(), function(bike) {
            return bike.name === bikeName;
        });
    }
};

module.exports = BikeService;
