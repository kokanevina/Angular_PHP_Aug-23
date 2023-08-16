var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("***in Animal constructor***");
    }
    Animal.prototype.eat = function () {
        console.log("Animal eats");
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        var _this = _super.call(this) || this;
        console.log("***in Tiger constructor***");
        return _this;
    }
    Tiger.prototype.eat = function () {
        console.log("Tiger eats other small animals");
    };
    return Tiger;
}(Animal));
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sheep.prototype.eat = function () {
        console.log("Horse eats grass");
    };
    return Sheep;
}(Animal));
var animal;
animal = new Tiger();
animal.eat();
var tg = animal;
animal = new Sheep();
animal.eat();
