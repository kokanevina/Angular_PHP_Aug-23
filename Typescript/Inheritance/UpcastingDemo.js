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
    }
    Animal.prototype.eat = function () {
        console.log("Animal eats");
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
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
// upcasting : casting subclass object to superclass
// superclass ref variable, object: subclass
var animal;
animal = new Animal();
animal.eat(); // Animal eat
animal = new Tiger(); // upcasting  // Tiger forget his own propeties
animal.eat(); // overriden version
animal = new Sheep();
animal.eat(); // overriden version
var tiger = new Tiger();
callEat(tiger);
var sheep = new Sheep();
callEat(sheep);
function callEat(anim) {
    anim.eat(); // difft versions of eat must be called depends on object
    console.log(typeof anim);
}
