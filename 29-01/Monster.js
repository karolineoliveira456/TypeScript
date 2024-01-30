"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name, strenght, life) {
        this.name = name;
        this.strenght = strenght;
        this.life = life;
    }
    Monster.prototype.getName = function () {
        return this.name;
    };
    Monster.prototype.setName = function (newName) {
        this.name = newName;
    };
    Monster.prototype.attack = function (myWarrior) {
        var damage = this.strenght;
        myWarrior.receiveDamage(damage),
            console.log("".concat(this.name, " recebe ").concat(damage, " dano do guerreiro"));
    };
    Monster.prototype.receiveDamage = function (damage) {
        this.life -= damage;
    };
    return Monster;
}());
exports.Monster = Monster;
