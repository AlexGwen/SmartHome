import { Conditioner } from "./class";
let qq = new Conditioner();
qq.temperature;
const scrinConditioner = document.createElement("div");
scrinConditioner.classList.add("scr4");

const top = document.createElement("div");
top.classList.add("scr2__top");

const but = document.createElement("div");
but.classList.add("scr2__bot");

const backCond = document.createElement("img");
backCond.src = "/img/back-arrow-to-first-track-svgrepo-com.svg";
backCond.classList.add("scr2__top-img");

const roomIcon = document.createElement("div");
roomIcon.classList.add("scr2__top-icon");

const conditioner = document.createElement("div");
conditioner.classList.add("scr2__top-icon-block");

const conditionerImg = document.createElement("img");
conditionerImg.src = "/img/air-conditioner-svgrepo-com.svg";
conditionerImg.classList.add("scr2__top-icon-block-img");

const span = document.createElement("span");
span.textContent = qq.temperature;

scrinConditioner.appendChild(but);
top.appendChild(backCond);
top.appendChild(roomIcon);
roomIcon.appendChild(conditioner);
conditioner.appendChild(conditionerImg);

export { scrinConditioner, backCond };
