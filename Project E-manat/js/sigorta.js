let flexArr = [
  {
    src: "images/azsigorta.png"
  },
  {
    src: "images/megasigorta.png"
  },
  {
    src: "images/atasigorta.png"
  },
  {
    src: "images/atesgahsigorta.jpg"
  },
  {
    src: "images/pasaheyat.jpg"
  },
  {
    src: "images/pasasigorta.jpg"
  }
];

let jsArr = [
  {
    src: "js/password/azsigorta.js"
  },
  {
    src: "js/password/megasigorta.js"
  },
  {
    src: "js/password/atasigorta.js"
  },
  {
    src: "js/password/atesgahsigorta.js"
  },
  {
    src: "js/password/pasaheyat.js"
  },
  {
    src: "js/password/pasasigorta.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/umbrella.png", "icon", iconPart);
  let textPart = new createElem("h1", null, "textPart", header);
  let flexPart = new createElem("div", null, "flexPart", container);
  for (let i = 0; i < flexArr.length; i++) {
    let flexDiv = new createElem("div", null, "flexDiv", flexPart);
    let flexDivImg = new createElem(
      "img",
      flexArr[i].src,
      "flexDivImg",
      flexDiv
    );
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


for (let i = 0; i < flexArr.length; i++) {
  $(".flexDiv")[i].addEventListener("click", () => {
    localStorage.passprovider = jsArr[i].src;
    document.location.href = "password.html";
  });
}