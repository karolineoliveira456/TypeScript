"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getWeight = function () {
        return this.weight;
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Animal.prototype.emitSound = function () {
        console.log("the animal is making a Sound...");
    };
    return Animal;
}());
exports.Animal = Animal;
