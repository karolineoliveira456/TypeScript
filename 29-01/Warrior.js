"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name, type, strenght) {
        this.name = name;
        this.type = type;
        this.strenght = strenght;
        this.life = 100;
    }
    Warrior.prototype.attack = function (myMonster) {
        var damage = this.strenght;
        myMonster.receiveDamage(damage),
            console.log("".concat(this.name, " recebe ").concat(damage, " dano do guerreiro"));
    };
    Warrior.prototype.receiveDamage = function (damage) {
        this.life -= damage;
    };
    return Warrior;
}());
exports.Warrior = Warrior;
