const scrinLivRoom = document.createElement("div");
scrinLivRoom.classList.add("scr3");

const top = document.createElement("div");
top.classList.add("scr2__top");

const but = document.createElement("div");
but.classList.add("scr2__bot");

const backLiv = document.createElement("img");
backLiv.src = "/img/back-arrow-to-first-track-svgrepo-com.svg";
backLiv.classList.add("scr2__top-img");
backLiv.id = "backRoom";

const roomIcon = document.createElement("div");
roomIcon.classList.add("scr2__top-icon");

// conditioner
const conditioner = document.createElement("div");
conditioner.classList.add("scr2__top-icon-block");

const conditionerImg = document.createElement("img");
conditionerImg.src = "/img/air-conditioner-svgrepo-com.svg";
conditionerImg.classList.add("scr2__top-icon-block-img");

// Tv
const tv = document.createElement("div");
tv.classList.add("scr2__top-icon-block");

const tvImg = document.createElement("img");
tvImg.src = "/img/tv-svgrepo-com.svg";
tvImg.classList.add("scr2__top-icon-block-img");

scrinLivRoom.appendChild(top);
scrinLivRoom.appendChild(but);
top.appendChild(backLiv);
top.appendChild(roomIcon);
roomIcon.appendChild(conditioner);
roomIcon.appendChild(tv);
conditioner.appendChild(conditionerImg);
tv.appendChild(tvImg);

export { scrinLivRoom, backLiv, conditioner, tv };
