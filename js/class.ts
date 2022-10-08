class Home {
  switch = false;
  TurnOnOff() {
    if (this.switch !== false) {
      this.switch = false;
      return this.switch;
    } else {
      this.switch = true;
      return this.switch;
    }
  }
  controller(a, b) {
    if (a > b) {
      for (a; a > b; a--) {
        a--;
        return a;
      }
    } else {
      for (a; a < b; a++) {
        a++;
        return a;
      }
    }
  }
}

// Rooms
class Room extends Home {
  devise: 2;
}

class BathRoom extends Home {
  devise: 1;
}

// Devises
// ------ Room
export class Conditioner extends Room {
  temperature = 0;
  value = 0;
  constructor() {
    super();
    this.controller(this.temperature, this.value);
  }
  controller() {}
}
export class TV extends Room {
  ChanelClick(a) {
    alert("Вы выбрали канал " + Chanel[a]);
  }
}
enum Chanel {
  "1+1" = 1,
  Simon,
  Inter,
  "2+2",
}

// ------ Kitchen

// ------ BathRoom
export class WachMachine extends BathRoom {
  Cotton() {
    alert("Вы выбрали режим Cotton");
  }
  Wool() {
    alert("Вы выбрали режим Wool");
  }
  Synthetics() {
    alert("Вы выбрали режим Synthetics");
  }

  mode(value) {
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
  }
}
