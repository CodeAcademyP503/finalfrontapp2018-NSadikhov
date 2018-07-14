let flexArr = [
  {
    src: "images/portmanat.png"
  },
  {
    src: "images/kassam.png"
  },
  {
    src: "images/azerpay.png"
  },
  {
    src: "images/yandex.png"
  },
  {
    src: "images/webmoney.png"
  },
  {
    src: "images/moneta.png"
  },
  {
    src: "images/qiwi.png"
  },
  {
    src: "images/webmoney.png"
  },
  {
    src: "images/qiwi.png"
  },
  {
    src: "images/paymanat.jpg"
  }
];

let jsArr = [
  {
    src: "js/password/portmanat.js"
  },
  {
    src: "js/password/kassam.js"
  },
  {
    src: "js/password/azerpay.js"
  },
  {
    src: "js/password/yandex.js"
  },
  {
    src: "js/password/webmoney.js"
  },
  {
    src: "js/password/moneta.js"
  },
  {
    src: "js/password/qiwi.js"
  },
  {
    src: "js/password/webmoney.js"
  },
  {
    src: "js/password/qiwi.js"
  },
  {
    src: "js/password/paymanat.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/e-pulqabi.png", "icon", iconPart);
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

