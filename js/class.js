import { scrin2, back, livingRoom, bathRoom } from "./room.js";
import { backLiv, scrinLivRoom, conditioner, tv } from "./livingRoom.js";
import {
  scrinConditioner,
  backCond,
  inpCond,
  spanCond,
  bntCond,
} from "./conditioner.js";
import {
  scrinTv,
  backTv,
  btnOn,
  butTv,
  chanelBtn,
  c1,
  c2,
  c3,
  c4,
} from "./tv.js";

import { backMach, scrinMach, btnWash } from "./WashMach.js";

("use strict");
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
// exports.__esModule = true;
// exports.WachMachine = exports.TV = exports.Conditioner = void 0;
var Home = /** @class */ (function () {
  function Home() {
    this["switch"] = false;
  }
  Home.prototype.TurnOnOff = function () {
    if (this["switch"] !== false) {
      this["switch"] = false;
      return this["switch"];
    } else {
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
      return a;
    } else {
      for (a; a < b; a++) {
        a++;
        return a;
      }
      return a;
    }
  };
  return Home;
})();
// Rooms
var Room = /** @class */ (function (_super) {
  __extends(Room, _super);
  function Room() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return Room;
})(Home);
var BathRoom = /** @class */ (function (_super) {
  __extends(BathRoom, _super);
  function BathRoom() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return BathRoom;
})(Home);
// Devises
// ------ Room
var Conditioner = /** @class */ (function (_super) {
  __extends(Conditioner, _super);
  function Conditioner() {
    var _this = _super.call(this) || this;
    _this.temperature = 0;
    _this.value = -2;
    _this.controller(_this.temperature, _this.value);
    return _this;
  }
  // Conditioner.prototype.controller = function (a, b) {};
  Conditioner.prototype.controller = function (a, b) {
    if (a > b) {
      for (a; a > b; a--) {
        a--;
        return a;
      }
      return a;
    } else {
      for (a; a < b; a++) {
        a++;
        return a;
      }
      return a;
    }
  };
  return Conditioner;
})(Room);
// exports.Conditioner = Conditioner;
var TV = /** @class */ (function (_super) {
  __extends(TV, _super);
  function TV() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TV.prototype.ChanelClick = function (a) {
    alert("Вы выбрали канал " + Chanel[a]);
  };
  return TV;
})(Room);
let tvDev = new TV();
// exports.TV = TV;
var Chanel;
(function (Chanel) {
  Chanel[(Chanel["1+1"] = 1)] = "1+1";
  Chanel[(Chanel["Simon"] = 2)] = "Simon";
  Chanel[(Chanel["Inter"] = 3)] = "Inter";
  Chanel[(Chanel["2+2"] = 4)] = "2+2";
})(Chanel || (Chanel = {}));
// ------ Kitchen
// ------ BathRoom
var WachMachine = /** @class */ (function (_super) {
  __extends(WachMachine, _super);
  function WachMachine() {
    return (_super !== null && _super.apply(this, arguments)) || this;
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
})(BathRoom);
// exports.WachMachine = WachMachine;
let WasDev = new WachMachine();

let ConditionerDev = new Conditioner();

const container = document.getElementById("root");
const fragment = document.createDocumentFragment();

function scrin() {
  const scrin = document.createElement("div");
  scrin.classList.add("scr");
  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");

  const div = document.createElement("div");
  div.classList.add("qq");

  const span = document.createElement("span");
  span.textContent = "Welcome to SmartHome!";
  span.classList.add("qq-span");

  var btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Start";
  // рендер домашней страницы
  btn.addEventListener("click", function () {
    scrin.appendChild(scrin2);
  });
  // возврат на главную страницу
  back.addEventListener("click", function () {
    scrin.removeChild(scrin2);
  });
  // домашняя => гостинная
  livingRoom.addEventListener("click", function () {
    scrin.removeChild(scrin2);
    scrin.appendChild(scrinLivRoom);
  });

  // гостинная => домашняя
  backLiv.addEventListener("click", function () {
    scrin.removeChild(scrinLivRoom);
    scrin.appendChild(scrin2);
  });
  // гостинная => кондиционер
  conditioner.addEventListener("click", function () {
    scrin.removeChild(scrinLivRoom);
    scrin.appendChild(scrinConditioner);
  });
  // гостинная => ТВ
  tv.addEventListener("click", function () {
    scrin.removeChild(scrinLivRoom);
    scrin.appendChild(scrinTv);
  });
  // ТВ => гостинная
  backTv.addEventListener("click", function () {
    scrin.removeChild(scrinTv);
    scrin.appendChild(scrinLivRoom);
  });
  // кондиционер => гостинная
  backCond.addEventListener("click", function () {
    scrin.removeChild(scrinConditioner);
    scrin.appendChild(scrinLivRoom);
  });
  // кондиционер, изменение температуры
  function ConditionerValueAdd() {
    spanCond.textContent = `Температура: ${ConditionerDev.temperature}`;
    bntCond.addEventListener("click", function () {
      ConditionerDev.value = inpCond.value;
      console.log("Заданная температура: " + ConditionerDev.value);
      // ConditionerDev.controller(this.temperature, this.value);
      function qq() {
        if (ConditionerDev.temperature > ConditionerDev.value) {
          for (
            ConditionerDev.temperature;
            ConditionerDev.temperature > ConditionerDev.value;
            ConditionerDev.temperature--
          ) {
            ConditionerDev.temperature--;
          }
          return ConditionerDev.temperature;
        } else {
          for (
            ConditionerDev.temperature;
            ConditionerDev.temperature < ConditionerDev.value;
            ConditionerDev.temperature++
          ) {
            ConditionerDev.temperature++;
          }
          return ConditionerDev.temperature;
        }
      }
      qq();
      console.log("Температура: " + ConditionerDev.temperature);
    });
  }
  // ТВ, выбор канала
  function TvAddChanel() {
    btnOn.addEventListener("click", function () {
      butTv.appendChild(chanelBtn);

      function AddChanelTv(a, b) {
        a.addEventListener("click", function () {
          tvDev.ChanelClick(b);
        });
      }
      AddChanelTv(c1, 1);
      AddChanelTv(c2, 2);
      AddChanelTv(c3, 3);
      AddChanelTv(c4, 4);
    });
  }
  // домашняя => Стиралка
  bathRoom.addEventListener("click", function () {
    scrin.removeChild(scrin2);
    scrin.appendChild(scrinMach);
  });
  // стиралка => домашняя
  backMach.addEventListener("click", function () {
    scrin.removeChild(scrinMach);
    scrin.appendChild(scrin2);
  });
  // стиралка, выбор режима
  function WashAddMode() {
    btnWash.addEventListener("click", function () {
      let m = +prompt("выберете режим от 1 до 3");
      WasDev.mode(m);
    });
  }
  setInterval(ConditionerValueAdd, 500);

  TvAddChanel();
  WashAddMode();

  // переменная в кондиционере
  inpCond.textContent = scrin.appendChild(divBlock);

  divBlock.appendChild(div);
  divBlock.appendChild(btn);
  div.appendChild(span);

  return scrin;
}

let ww = scrin();
fragment.appendChild(ww);
container.appendChild(fragment);
