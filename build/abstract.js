"use strict";
class Vehicle {
    start() {
        console.log("brummm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
