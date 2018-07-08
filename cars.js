// interface Mycar{
//     Carname:string;
//     Carengine:string;
//     Carwheel:string;
//     Cartype:string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Suzuki = /** @class */ (function () {
    function Suzuki() {
        this.make = "Suzuki";
    }
    return Suzuki;
}());
var Alto = /** @class */ (function (_super) {
    __extends(Alto, _super);
    function Alto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alto.prototype.setValues = function (a, b, c, d, e, f, g, h) {
        this.model = a;
        this.year = b;
        this.color = c;
        this.transmission = d;
        this.trim = e;
        this.milage = f;
        this.ownername = g;
        this.condition = h;
    };
    return Alto;
}(Suzuki));
var suzuki = new Suzuki();
var alto = new Alto();
alto.setValues("4", 2008, "silver", "manual", "x-large", 11223990, "Ali", "medium");
console.log("Brand: " + alto.make);
console.log("seter: " + alto.model);
console.log("Year: " + alto.year);
console.log("Color: " + alto.color);
console.log("Transmission: " + alto.transmission);
console.log("Trim: " + alto.trim);
console.log("Milage: " + alto.milage);
console.log("Ownername: " + alto.ownername);
console.log("Condition: " + alto.condition);
