let iconArr = [
  {
    src: "images/fire.png"
  },
  {
    src: "images/water.png"
  },
  {
    src: "images/light.png"
  }
];


function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  for (let i = 0; i < iconArr.length; i++) {
    let icon = new createElem("img", iconArr[i].src, "icon", iconPart);
  }
  let textPart = new createElem("h1", null, "textPart", header);
  textPart.innerText = "AZƏRİŞIQ";
  let flexPart = new createElem("div", null, "flexPart", container);
  for (let i = 0; i < 2; i++) {
    let flexDiv = new createElem("div", null, "flexDiv", flexPart);
    if (i == 0) {
      let flexText = new createElem("div", null, "flexTextFirst", flexDiv);
    } else if (i == 1) {
      let flexText = new createElem("div", null, "flexTextSecond", flexDiv);
    }
  }
  let footer = new createElem("div", null, "footer", container);
  let btn = new createElem("button", null, "btn", footer);
  btn.addEventListener("click", () => {
    localStorage.clear();
    document.location.href = "index.html";
  });
  let btnIcon = new createElem("img", "images/home.png", "btnIcon", btn);
  let btnText = new createElem("h5", null, "btnText", btn);
}
Create();
azeMoment();
if (localStorage.lang == "azeMoment") {
  azeMoment();
} else if (localStorage.lang == "ingMoment") {
  ingMoment();
} else if (localStorage.lang == "ruMoment") {
  ruMoment();
}

for (let i = 0; i < 2; i++) {
  $(".flexDiv")[i].addEventListener("click", () => {
    localStorage.passprovider = "js/password/azerisiq.js";
    document.location.href = "password.html";
  });
}
