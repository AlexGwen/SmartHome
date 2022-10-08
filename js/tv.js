const scrinTv = document.createElement("div");
scrinTv.classList.add("scr4");

const top = document.createElement("div");
top.classList.add("scr2__top");

const butTv = document.createElement("div");
butTv.classList.add("scr4__bot");

const backTv = document.createElement("img");
backTv.src = "/img/back-arrow-to-first-track-svgrepo-com.svg";
backTv.classList.add("scr2__top-img");

const roomIcon = document.createElement("div");
roomIcon.classList.add("scr2__top-icon");

const tv = document.createElement("div");
tv.classList.add("scr2__top-icon-block");

const tvImg = document.createElement("img");
tvImg.src = "/img/tv-svgrepo-com.svg";
tvImg.classList.add("scr2__top-icon-block-img");

const btnOn = document.createElement("button");
btnOn.classList.add("btnTv");
btnOn.textContent = "On TV";

const chanelBtn = document.createElement("div");
chanelBtn.classList.add("chanel");
const c1 = document.createElement("button");
c1.classList.add("chanel-c");
c1.textContent = "1+1";
const c2 = document.createElement("button");
c2.classList.add("chanel-c");
c2.textContent = "Simon";
const c3 = document.createElement("button");
c3.classList.add("chanel-c");
c3.textContent = "Inter";
const c4 = document.createElement("button");
c4.classList.add("chanel-c");
c4.textContent = "2+2";

chanelBtn.appendChild(c1);
chanelBtn.appendChild(c2);
chanelBtn.appendChild(c3);
chanelBtn.appendChild(c4);

scrinTv.appendChild(top);
top.appendChild(backTv);
top.appendChild(roomIcon);
roomIcon.appendChild(tv);
tv.appendChild(tvImg);
scrinTv.appendChild(butTv);
butTv.appendChild(btnOn);

export { scrinTv, backTv, btnOn, butTv, chanelBtn, c1, c2, c3, c4 };
