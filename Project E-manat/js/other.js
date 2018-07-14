let flexArr = [
  {
    src: "images/faberlic.png"
  },
  {
    src: "images/kaspersky.png"
  },
  {
    src: "images/oriflame.png"
  },
  {
    src: "images/ubs.png"
  },
  {
    src: "images/azerqaz.png"
  },
  {
    src: "images/temizseher.jpg"
  },
  {
    src: "images/irsad.png"
  },
  {
    src: "images/yaxintaxi.png"
  },
  {
    src: "images/eset.png"
  },
  {
    src: "images/azeriqaz.png"
  },
  {
    src: "images/prosol.png"
  },
  {
    src: "images/lsp.png"
  },
  {
    src: "images/bereket.png"
  },
];

let jsArr = [
  {
    src: "js/password/faberlic.js"
  },
  {
    src: "js/password/kaspersky.js"
  },
  {
    src: "js/password/oriflame.js"
  },
  {
    src: "js/password/ubs.js"
  },
  {
    src: "js/password/socar.js"
  },
  {
    src: "js/password/temizseher.js"
  },
  {
    src: "js/password/irsad.js"
  },
  {
    src: "js/password/yaxintaxi.js"
  },
  {
    src: "js/password/eset.js"
  },
  {
    src: "js/password/azeriqaz.js"
  },
  {
    src: "js/password/prosol.js"
  },
  {
    src: "js/password/lsp.js"
  },
  {
    src: "js/password/bereket.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/other.png", "icon", iconPart);
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