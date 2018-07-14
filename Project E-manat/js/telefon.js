let flexArr = [
  {
    src: "images/baktel-aztel.png"
  },
  {
    src: "images/azerurotel.png"
  },
  {
    src: "images/ultel.png"
  },
  {
    src: "images/transeuro.png"
  },
  {
    src: "images/catel.jpg"
  },
  {
    src: ""
  }
];

let jsArr = [
  {
    src: "js/password/bakaztel.js"
  },
  {
    src: "js/password/azeurotel.js"
  },
  {
    src: "js/password/ultel.js"
  },
  {
    src: "js/password/transeurocom.js"
  },
  {
    src: "js/password/catel.js"
  },
  {
    src: "js/password/naxcivantelefon.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem(
    "img",
    "images/telephone.png",
    "icon",
    iconPart
  );
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
    if (i == 5) {
      let h4 = new createElem("h4", null, "h4", flexDiv);
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


for (let i = 0; i < flexArr.length; i++) {
  $(".flexDiv")[i].addEventListener("click", () => {
    localStorage.passprovider = jsArr[i].src;
    document.location.href = "password.html";
  });
}
