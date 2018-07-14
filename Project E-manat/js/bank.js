let flexArr = [
  {
    src: "images/unibank.png"
  },
  {
    src: "images/bankofbaku.png"
  },
  {
    src: "images/kapitalbank.png"
  },
  {
    src: "images/rabitebank.png"
  },
  {
    src: "images/yapikredi.jpeg"
  },
  {
    src: "images/embafinans.jpg"
  },
  {
    src: "images/bankrespublika.png"
  },
  {
    src: "images/finca.png"
  },
  {
    src: "images/nikoil.jpg"
  },
  {
    src: "images/molbulak.jpg"
  },
  {
    src: "images/merkuri.jpg"
  },
  {
    src: "images/muganbank.jpg"
  },
  {
    src: "images/VTB.jpg"
  },
  {
    src: "images/bankbtb.png"
  },
  {
    src: "images/turanbank.png"
  },
  {
    src: "images/tbc-kredit.png"
  }
];
let flexArr2 = [
  {
    src: "images/amrah-bank.jpg"
  },
  {
    src: "images/kredit-evi.jpg"
  },
  {
    src: "images/nbc-bank.png"
  },
  {
    src: "images/invest-az.png"
  },
  {
    src: "images/psg-finans.png"
  },
  {
    src: "images/access-bank.jpg"
  },
  {
    src: ""
  }
];

let jsArr = [
  {
    src: "js/password/unibank.js"
  },
  {
    src: "js/password/bankofbaku.js"
  },
  {
    src: "js/password/kapital.js"
  },
  {
    src:"js/password/rabite.js"
  },
  {
    src:"js/password/yapikredi.js"
  },
  {
    src:"js/password/embafinans.js"
  },
  {
    src:"js/password/bankrespublika.js"
  },
  {
    src:"js/password/finca.js"
  },
  {
    src:"js/password/nikoil.js"
  },
  {
    src:"js/password/molbulak.js"
  },
  {
    src:"js/password/merkuri.js"
  },
  {
    src:"js/password/muganbank.js"
  },
  {
    src:"js/password/vtb.js"
  },
  {
    src:"js/password/bankbtb.js"
  },
  {
    src:"js/password/turanbank.js"
  },
  {
    src:"js/password/tbckredit.js"
  },
  
];

let jsArr2 = [
  {
    src:"js/password/amrahbank.js"
  },
  {
    src:"js/password/kreditevi.js"
  },
  {
    src:"js/password/nbcbank.js"
  },
  {
    src:"js/password/investaz.js"
  },
  {
    src:"js/password/psgfinans.js"
  },
  {
    src:"js/password/accessbank.js"
  },
  {
    src:"js/password/kreditlerinsifarisi.js"
  },
]

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem(
    "img",
    "images/bank-xidmetleri.png",
    "icon",
    iconPart
  );
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
    if(i==6){
      let flexDivText = new createElem("h1", null, "flexDivText", flexDiv);
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
  let forwardIcon= new createElem("img","images/forward.png","forwardIcon",forwardBtn);
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
  let backIcon = new createElem("img","images/forward.png","backIcon",backBtn);
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
