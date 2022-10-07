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

const spanCond = document.createElement("span");
// spanCond.textContent = "Температура: ";

const inpCond = document.createElement("input");
inpCond.type = "range";
inpCond.min = 5;
inpCond.max = 30;
inpCond.step = 1;

const bntCond = document.createElement("button");
bntCond.classList.add("scr4-btn");
bntCond.textContent = "Add";

scrinConditioner.appendChild(top);
scrinConditioner.appendChild(but);
top.appendChild(backCond);
top.appendChild(roomIcon);
roomIcon.appendChild(conditioner);
conditioner.appendChild(conditionerImg);
but.appendChild(spanCond);
but.appendChild(inpCond);
but.appendChild(bntCond);

export { scrinConditioner, backCond, inpCond, spanCond, bntCond };
