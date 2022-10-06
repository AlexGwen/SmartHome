"use strict";
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
exports.__esModule = true;
exports.WachMachine = exports.TV = exports.Conditioner = void 0;
var Home = /** @class */ (function () {
    function Home() {
        this["switch"] = false;
    }
    Home.prototype.TurnOnOff = function () {
        if (this["switch"] !== false) {
            this["switch"] = false;
            return this["switch"];
        }
        else {
            this["switch"] = true;
            return this["switch"];
        }
    };
    Home.prototype.controller = function (a, b) {
        if (a > b) {
            for (a; a > b; a--) {
                a--;
                return a;
            }
        }
        else {
            for (a; a < b; a++) {
                a++;
                return a;
            }
        }
    };
    return Home;
}());
// Rooms
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Room;
}(Home));
var BathRoom = /** @class */ (function (_super) {
    __extends(BathRoom, _super);
    function BathRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BathRoom;
}(Home));
// Devises
// ------ Room
var Conditioner = /** @class */ (function (_super) {
    __extends(Conditioner, _super);
    function Conditioner() {
        var _this = _super.call(this) || this;
        _this.temperature = 0;
        _this.value = 0;
        _this.controller(_this.temperature, _this.value);
        return _this;
    }
    Conditioner.prototype.controller = function (a, b) { };
    return Conditioner;
}(Room));
exports.Conditioner = Conditioner;
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TV.prototype.ChanelClick = function (a) {
        alert("Вы выбрали канал " + Chanel[a]);
    };
    return TV;
}(Room));
exports.TV = TV;
var Chanel;
(function (Chanel) {
    Chanel[Chanel["1+1"] = 1] = "1+1";
    Chanel[Chanel["Simon"] = 2] = "Simon";
    Chanel[Chanel["Inter"] = 3] = "Inter";
    Chanel[Chanel["2+2"] = 4] = "2+2";
})(Chanel || (Chanel = {}));
// ------ Kitchen
// ------ BathRoom
var WachMachine = /** @class */ (function (_super) {
    __extends(WachMachine, _super);
    function WachMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WachMachine.prototype.Cotton = function () {
        alert("Вы выбрали режим Cotton");
    };
    WachMachine.prototype.Wool = function () {
        alert("Вы выбрали режим Wool");
    };
    WachMachine.prototype.Synthetics = function () {
        alert("Вы выбрали режим Synthetics");
    };
    WachMachine.prototype.mode = function (value) {
        switch (value) {
            case 1:
                this.Cotton();
                break;
            case 2:
                this.Wool();
                break;
            case 3:
                this.Synthetics();
                break;
            default:
                alert("Выберете режим");
        }
    };
    return WachMachine;
}(BathRoom));
exports.WachMachine = WachMachine;
