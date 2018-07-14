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
let flexArr = [
  {
    src: "images/azeriqaz.png"
  },
  {
    src: "images/azersu.png"
  },
  {
    src: "images/azerisiq.png"
  },
  {
    src: ""
  },
  {
    src: "images/rahat-yasam.jpg"
  },
  {
    src: "images/naxcivan.png"
  }
];

let jsArr = [
  {
    src: "js/password/azeriqaz.js"
  },
  {
    src: "js/password/azersu.js"
  },
  {
    src: "js/choose/chooseazerisiq.js"
  },
  {
    src:"js/password/azeristilik.js"
  },
  {
    src:"js/password/rahatYasam.js"
  },
  {
    src:"js/password/naxcivan.js"
  },
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  for (let i = 0; i < iconArr.length; i++) {
    let icon = new createElem("img", iconArr[i].src, "icon", iconPart);
  }
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
    if (i == 3) {
      let h3 = new createElem("h3", null, "h3", flexDiv);
      h3.innerText = "AZƏRİSTİLİKTƏCHİZAT";
    }
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
  if (i == 2) {
    $(".flexDiv")[i].addEventListener("click", () => {
      localStorage.chooseprovider = jsArr[i].src;
      document.location.href = "choosePart.html";
    });
  } else {
    $(".flexDiv")[i].addEventListener("click", () => {
      localStorage.passprovider = jsArr[i].src;
      document.location.href = "password.html";
    });
  }
}
