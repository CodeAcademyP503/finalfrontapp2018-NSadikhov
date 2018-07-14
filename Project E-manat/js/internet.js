let flexArr = [
  {
    src: "images/aztelekom.png"
  },
  {
    src: "images/azerurotel.png"
  },
  {
    src: "images/baktelekom.jpg"
  },
  {
    src: "images/katv.jpg"
  },
  {
    src: "images/connecttv.jpg"
  },
  {
    src: "images/birlink.png"
  },
  {
    src: "images/ultel.png"
  },
  {
    src: "images/azeronline.png"
  },
  {
    src: "images/ailenet.png"
  },
  {
    src: "images/alfanet.jpg"
  },
  {
    src: "images/azstarnet.png"
  },
  {
    src: "images/smarttv.png"
  },
  {
    src: "images/avirtel.png"
  },
  {
    src: "images/narhome.png"
  },
  {
    src: "images/azfiber.png"
  },
  {
    src: "images/city-line.jpg"
  }
];
let flexArr2 = [
  {
    src: "images/izone-bee.png"
  },
  {
    src: "images/metronet.png"
  },
  {
    src: "images/teleport.png"
  },
  {
    src: "images/fibernet-telecom.png"
  },
  {
    src: "images/cliptv.png"
  },
  {
    src: "images/mega-life.png"
  },
  {
    src: "images/horse.png"
  },
  {
    src: "images/naxcivan-internet.png"
  },
  {
    src: "images/ultranet.jpg"
  },
  {
    src: "images/tvcity.png"
  }
];

let jsArr = [
  {
    src: "js/password/aztelecom.js"
  },
  {
    src: "js/password/azeurotel.js"
  },
  {
    src: "js/password/baktelecom.js"
  },
  {
    src:"js/password/katv.js"
  },
  {
    src:"js/password/connect.js"
  },
  {
    src:"js/password/birlink.js"
  },
  {
    src:"js/password/ultel.js"
  },
  {
    src:"js/password/azeronline.js"
  },
  {
    src:"js/password/ailenet.js"
  },
  {
    src:"js/password/alfanet.js"
  },
  {
    src:"js/password/azstarnet.js"
  },
  {
    src:"js/password/smartonline.js"
  },
  {
    src:"js/password/avirtel.js"
  },
  {
    src:"js/password/narhome.js"
  },
  {
    src:"js/password/azfiber.js"
  },
  {
    src:"js/password/cityline.js"
  },
  
];

let jsArr2 = [
  {
    src:"js/password/izone.js"
  },
  {
    src:"js/password/metronet.js"
  },
  {
    src:"js/password/teleport.js"
  },
  {
    src:"js/password/fibernettelecom.js"
  },
  {
    src:"js/password/cliptv.js"
  },
  {
    src:"js/password/megalife.js"
  },
  {
    src:"js/password/rahattelecom.js"
  },
  {
    src:"js/password/naxcivaninternet.js"
  },
  {
    src:"js/password/ultranet.js"
  },
  {
    src:"js/password/tvcity.js"
  },
]


function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/internet.png", "icon", iconPart);
  let textPart = new createElem("h1", null, "textPart", header);
  let pageText = new createElem("h2", null, "pageText", header);
  pageText.innerText = "1/2";
  let mainPart = new createElem("div", null, "mainPart", container);
  let flexPart = new createElem("div", null, "flexPart", mainPart);
  let flexPart1 = new createElem("div", null, "flexPart1", flexPart);
  for (let i = 0; i < flexArr.length; i++) {
    let flexDiv = new createElem("div", null, "flexDiv", flexPart1);
    let flexDivImg = new createElem(
      "img",
      flexArr[i].src,
      "flexDivImg",
      flexDiv
    );
  }
  let flexPart2 = new createElem("div", null, "flexPart2", flexPart);
  for (let i = 0; i < flexArr2.length; i++) {
    let flexDiv = new createElem("div", null, "flexDiv2", flexPart2);
    let flexDivImg = new createElem(
      "img",
      flexArr2[i].src,
      "flexDivImg2",
      flexDiv
    );
    if (i == 6) {
      let flexDivText = new createElem("h2", null, "flexDivText", flexDiv);
      flexDivText.innerText = "RAHAT TELECOM";
    }
    if (i == 7) {
      let seventhText = new createElem("h2", null, "seventhText", flexDiv);
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
  let forwardBtn = new createElem("button", null, "forwardBtn", footer);
  let forwardBtnText = new createElem("h3", null, "forwardBtnText", forwardBtn);
  let forwardIcon = new createElem(
    "img",
    "images/forward.png",
    "forwardIcon",
    forwardBtn
  );
  forwardBtn.addEventListener("click", () => {
    let firstDiv = parseInt(getComputedStyle(flexPart1).right);
    let secondDiv = parseInt(getComputedStyle(flexPart2).left);
    if (firstDiv == 0 && secondDiv == 950) {
      pageText.innerText = "2/2";
      backBtn.style.visibility = "visible";
      forwardBtn.style.visibility = "hidden";
      let handler = setInterval(() => {
        firstDiv += 10;
        secondDiv -= 10;
        flexPart1.style.right = firstDiv + "px";
        flexPart2.style.left = secondDiv + "px";
        if (firstDiv == 950 && secondDiv == 0) {
          clearInterval(handler);
        }
      }, 10);
    }
  });
  let backBtn = new createElem("button", null, "backBtn", footer);
  let backIcon = new createElem(
    "img",
    "images/forward.png",
    "backIcon",
    backBtn
  );
  let backBtnText = new createElem("h3", null, "backBtnText", backBtn);
  backBtn.addEventListener("click", () => {
    let firstDiv = parseInt(getComputedStyle(flexPart1).right);
    let secondDiv = parseInt(getComputedStyle(flexPart2).left);
    if (firstDiv == 950 && secondDiv == 0) {
      pageText.innerText = "1/2";
      backBtn.style.visibility = "hidden";
      forwardBtn.style.visibility = "visible";
      let handler = setInterval(() => {
        firstDiv -= 10;
        secondDiv += 10;
        flexPart1.style.right = firstDiv + "px";
        flexPart2.style.left = secondDiv + "px";
        if (firstDiv == 0 && secondDiv == 950) {
          clearInterval(handler);
        }
      }, 10);
    }
  });
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
for (let i = 0; i < flexArr2.length; i++) {
  $(".flexDiv2")[i].addEventListener("click", () => {
    localStorage.passprovider = jsArr2[i].src;
    document.location.href = "password.html";
  });
}
