const scrinMach = document.createElement("div");
scrinMach.classList.add("scr4");

const top = document.createElement("div");
top.classList.add("scr2__top");

const butMach = document.createElement("div");
butMach.classList.add("scr4__bot");

const backMach = document.createElement("img");
backMach.src = "/img/back-arrow-to-first-track-svgrepo-com.svg";
backMach.classList.add("scr2__top-img");

const roomIcon = document.createElement("div");
roomIcon.classList.add("scr2__top-icon");

const Mach = document.createElement("div");
Mach.classList.add("scr2__top-icon-block");

const MachImg = document.createElement("img");
MachImg.src = "/img/washing-machine-svgrepo-com.svg";
MachImg.classList.add("scr2__top-icon-block-img");

const btnWash = document.createElement("button");
btnWash.classList.add("btnTv");
btnWash.textContent = "On";

scrinMach.appendChild(top);
top.appendChild(backMach);
top.appendChild(roomIcon);
roomIcon.appendChild(Mach);
Mach.appendChild(MachImg);
scrinMach.appendChild(butMach);
butMach.appendChild(btnWash);

export { scrinMach, backMach, btnWash };
