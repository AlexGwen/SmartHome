var scrin2 = document.createElement("div");
scrin2.classList.add("scr2");

const top = document.createElement("div");
top.classList.add("scr2__top");

const but = document.createElement("div");
but.classList.add("scr2__bot");

const back = document.createElement("img");
back.src = "/img/back-arrow-to-first-track-svgrepo-com.svg";
back.classList.add("scr2__top-img");
back.id = "backRoom";

const roomIcon = document.createElement("div");
roomIcon.classList.add("scr2__top-icon");

const imgLiv = document.createElement("img");
imgLiv.src = "/img/livingroom-svgrepo-com.svg";
imgLiv.classList.add("scr2__top-icon-block-img");

const livingRoom = document.createElement("div");
livingRoom.classList.add("scr2__top-icon-block");

const imgBath = document.createElement("img");
imgBath.src = "/img/relax-bathroom-svgrepo-com.svg";
imgBath.classList.add("scr2__top-icon-block-img");

const bathRoom = document.createElement("div");
bathRoom.classList.add("scr2__top-icon-block");

scrin2.appendChild(top);
top.appendChild(back);
top.appendChild(roomIcon);
roomIcon.appendChild(livingRoom);
roomIcon.appendChild(bathRoom);
livingRoom.appendChild(imgLiv);
bathRoom.appendChild(imgBath);
scrin2.appendChild(but);

export { scrin2, back, livingRoom, bathRoom };
