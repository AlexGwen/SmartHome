import { scrin2, back, livingRoom, bathRoom } from "./room.js";
import { backLiv, scrinLivRoom, conditioner, tv } from "./livingRoom.js";
import { scrinConditioner, backCond } from "./conditioner.js";

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

  btn.addEventListener("click", function () {
    scrin.appendChild(scrin2);
  });
  back.addEventListener("click", function () {
    scrin.removeChild(scrin2);
  });
  livingRoom.addEventListener("click", function () {
    scrin.removeChild(scrin2);
    scrin.appendChild(scrinLivRoom);
  });
  bathRoom.addEventListener("click", function () {
    scrin.removeChild(scrin2);
    scrin.appendChild();
  });
  backLiv.addEventListener("click", function () {
    scrin.removeChild(scrinLivRoom);
    scrin.appendChild(scrin2);
  });
  conditioner.addEventListener("click", function () {
    scrin.removeChild(scrinLivRoom);
    scrin.appendChild(scrinConditioner);
  });
  tv.addEventListener("click", function () {
    scrin.removeChild(scrinLivRoom);
    scrin.appendChild();
  });
  backCond.addEventListener("click", function () {
    scrin.removeChild(scrinConditioner);
    scrin.appendChild(scrinLivRoom);
  });

  scrin.appendChild(divBlock);
  divBlock.appendChild(div);
  divBlock.appendChild(btn);
  div.appendChild(span);

  return scrin;
}

let ww = scrin();
fragment.appendChild(ww);
container.appendChild(fragment);
