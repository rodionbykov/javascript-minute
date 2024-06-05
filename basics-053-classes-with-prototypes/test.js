function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

Car.prototype.getDescription = function() {
  console.log(`This is a ${this.make} ${this.model} of color ${this.color}.`);
}

const car1 = new Car("DeLorean", "DMC-12", "Metal");

car1.getDescription();
