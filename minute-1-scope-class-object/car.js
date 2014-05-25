// car class
(function (context) {
    
    // public properties outside constructor
    Car.prototype.consumption = 7;
    
    // static variable
    Car.number_of_wheels = 4;
    
    // constructor
    function Car(make, model, color) {
        // creating public properties inside constructor
        this.make = make;
        this.model = model;
        this.color = color;
        
        // private property
        var _speed;
        this.getSpeed = function () { return _speed; };
        this.setSpeed = function (speed) { _speed = speed; };
    }
    
    // public method
    Car.prototype.startEngine = function () {
        console.log(getDescription(this) + " said Wroooom!");
    };
    
    // private method
    function getDescription(car) {
        return car.make + " " + car.model;
    }
    
    // putting class to context
    context.Car = Car;
    
}(window)); // in this case, context is a top-level DOM element