var BikeService = require("bikes/bikeService");
var Logger = require("utils/logger");
var BikeController = require("bikes/bikeController");

describe('BikeController', function() {

    var bikeController = null;

    beforeEach(function() {
        bikeController = new BikeController();
    });

    describe('get', function() {
        var bikes = null;

        beforeEach(function() {
            bikes = jasmine.createSpy("bikes");
            spyOn(BikeService, 'get').and.returnValue(bikes);
            spyOn(Logger, 'logList');
            bikeController.logAllBikes();
        });

        it("should call Logger.logList with bikes", function() {
            expect(Logger.logList).toHaveBeenCalledWith(bikes);
        });

    });

    describe('find', function() {

        var bike = null;

        beforeEach(function() {
            var bikeName = 'bike name';
            bike = jasmine.createSpy("bike");
            sinon.stub(BikeService, 'find').withArgs(bikeName).returns(bike);
            spyOn(Logger, 'logSingle');
            bikeController.logSingleBike(bikeName);
        });

        afterEach(function () {
            BikeService.find.restore();
        });

        it('should call Logger.logSingle with bike', function() {
            expect(Logger.logSingle).toHaveBeenCalledWith(bike);
        });

    });


});
