let flexArr = [
  {
    src: "images/emdk.jpg"
  },
  {
    src: "images/gerb.png"
  },
  {
    src: "images/gerb.png"
  },
  {
    src: "images/din.png"
  },
  {
    src: ""
  }
];

let jsArr = [
  {
    src: "js/password/emdk.js"
  },
  {
    src: "js/password/belediyyevergileri.js"
  },
  {
    src: "js/password/nizami.js"
  },
  {
    src: "js/password/dincerime.js"
  },
  {
    src: "js/password/dgkcerime.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/DB.png", "icon", iconPart);
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
    if (i == 0) {
      let firstText = new createElem("h1", null, "firstText", flexDiv);
      firstText.innerText = "ƏMDK";
    } else if (i == 1) {
      let secondText = new createElem("h3", null, "secondText", flexDiv);
    } else if (i == 2) {
      let thirdText = new createElem("h3", null, "thirdText", flexDiv);
      thirdText.innerText = "NIZAMI MKTB";
    } else if (i == 3) {
      let fourthText = new createElem("h3", null, "fourthText", flexDiv);
    } else if (i == 4) {
      let fifthText = new createElem("h2", null, "fifthText", flexDiv);
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
