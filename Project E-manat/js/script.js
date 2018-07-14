function $(select) {
  return document.querySelectorAll(select);
}

class createElem {
  constructor(element, src, className, parent) {
    let elem = document.createElement(element);
    elem.src = src;
    elem.className = className;
    parent.appendChild(elem);
    return elem;
  }
}

topPartArr = [
  {
    src: "images/azeriqaz.png"
  },
  {
    src: "images/azersu.png"
  },
  {
    src: "images/azercell.png"
  },
  {
    src: "images/bakcell.png"
  },
  {
    src: "images/nar.png"
  },
  {
    src: "images/azerisiq.png"
  },
  {
    src: "images/megasigorta.png"
  }
];

topPartJs = [
  {
    src: "js/password/azeriqaz.js",
    mainSrc: "js/communal.js",
    mainHref: "css/communal.css"
  },
  {
    src: "js/password/azersu.js",
    mainSrc: "js/communal.js",
    mainHref: "css/communal.css"
  },
  {
    src: "js/password/azercell.js",
    mainSrc: "js/mobile.js",
    mainHref: "css/mobile.css"
  },
  {
    src: "js/password/bakcell.js",
    mainSrc: "js/mobile.js",
    mainHref: "css/mobile.css"
  },
  {
    src: "js/password/nar.js",
    mainSrc: "js/mobile.js",
    mainHref: "css/mobile.css"
  },
  {
    src: "js/choose/chooseazerisiq.js",
    mainSrc: "js/communal.js",
    mainHref: "css/communal.css"
  },
  {
    src: "js/password/megasigorta.js",
    mainSrc: "js/sigorta.js",
    mainHref: "css/sigorta.css"
  }
];

flexsArr = [
  (icon = [
    { src: "images/fire.png" },
    { src: "images/water.png" },
    { src: "images/light.png" }
  ]),
  {
    src: "images/mobile-operator.png"
  },
  {
    src: "images/bank-xidmetleri.png"
  },
  {
    src: "images/DB.png"
  },
  {
    src: "images/TV.png"
  },
  {
    src: "images/internet.png"
  },
  {
    src: "images/telephone.png"
  },
  {
    src: "images/game.png"
  },
  {
    src: "images/e-pulqabi.png"
  }
];
flexsArr2 = [
  {
    src: "images/umbrella.png"
  },
  {
    src: "images/endirim.png"
  },
  {
    src: "images/charity.png"
  },
  {
    src: "images/credit-card.png"
  },
  {
    src: "images/domofon.png"
  },
  {
    src: "images/online-store.png"
  },
  {
    src: "images/education.png"
  },
  {
    src: "images/other.png"
  },
  {
    src: "images/tourism.png"
  }
];
jsArr = [
  {
    href: "css/communal.css",
    src: "js/communal.js"
  },
  {
    href: "css/mobile.css",
    src: "js/mobile.js"
  },
  {
    href: "css/bank.css",
    src: "js/bank.js"
  },
  {
    href: "css/state.css",
    src: "js/state.js"
  },
  {
    href: "css/tv.css",
    src: "js/tv.js"
  },
  {
    href: "css/internet.css",
    src: "js/internet.js"
  },
  {
    href: "css/telefon.css",
    src: "js/telefon.js"
  },
  {
    href: "css/game.css",
    src: "js/game.js"
  },
  {
    href: "css/wallet.css",
    src: "js/wallet.js"
  }
];
jsArr2 = [
  {
    href: "css/sigorta.css",
    src: "js/sigorta.js"
  },
  {
    href: "css/elan.css",
    src: "js/elan.js"
  },
  {
    href: "css/charity.css",
    src: "js/charity.js"
  },
  {
    href: "css/paycard.css",
    src: "js/paycard.js"
  },
  {
    href: "css/domofon.css",
    src: "js/domofon.js"
  },
  {
    href: "css/store.css",
    src: "js/store.js"
  },
  {
    href: "css/education.css",
    src: "js/education.js"
  },
  {
    href: "css/other.css",
    src: "js/other.js"
  },
  {
    href: "css/trip.css",
    src: "js/trip.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let timePart = new createElem("div", null, "timePart", header);
  let pTime = new createElem("p", null, "pTime", timePart);
  let logoPart = new createElem("div", null, "logoPart", header);
  let logoImg = new createElem(
    "img",
    "images/E-manat.png",
    "logoImg",
    logoPart
  );
  let logoImgInfo = new createElem(
    "img",
    "images/info.png",
    "logoImgInfo",
    logoPart
  );
  let flagPart = new createElem("div", null, "flagPart", header);
  let logoIng = new createElem("img", "images/ING.png", "logoFlag", flagPart);
  logoIng.addEventListener("click", () => {
    ingMoment();
    localStorage.lang = "ingMoment";
  });
  let logoRu = new createElem("img", "images/RU.png", "logoFlag", flagPart);
  logoRu.addEventListener("click", () => {
    ruMoment();
    localStorage.lang = "ruMoment";
  });
  let logoAze = new createElem("img", "images/AZE.png", "logoFlag", flagPart);
  logoAze.addEventListener("click", () => {
    azeMoment();
    localStorage.lang = "azeMoment";
  });
  let navPart = new createElem("div", null, "navPart", container);
  for (let i = 0; i < topPartArr.length; i++) {
    let flexElem = new createElem("div", null, "flexElem", navPart);
    let flexItemImg = new createElem(
      "img",
      topPartArr[i].src,
      "flexItemImg",
      flexElem
    );
  }
  let main = new createElem("div", null, "main", container);
  let mainAdvertLeft = new createElem("div", null, "mainAdvertLeft", main);

  let mainFlex = new createElem("div", null, "mainFlex", main);
  let btnFirst = new createElem("button", null, "btnFirst", mainFlex);
  btnFirst.addEventListener("click", () => {
    let firstDiv = parseInt(getComputedStyle(mainFlexDiv1).right);
    let secondDiv = parseInt(getComputedStyle(mainFlexDiv2).left);
    if (firstDiv == 490 && secondDiv == 0) {
      let handler = setInterval(() => {
        firstDiv -= 10;
        secondDiv += 10;
        mainFlexDiv1.style.right = firstDiv + "px";
        mainFlexDiv2.style.left = secondDiv + "px";
        if (firstDiv == 0 && secondDiv == 490) {
          clearInterval(handler);
        }
      }, 15);
    }
  });
  let mainLeftIcon = new createElem(
    "img",
    "images/mainLeftIcon.png",
    "mainIcon",
    btnFirst
  );
  let mainFlexDiv = new createElem("div", null, "mainFlexDiv", mainFlex);
  let mainFlexDiv1 = new createElem("div", null, "mainFlexDiv1", mainFlexDiv);
  for (let i = 0; i < 9; i++) {
    mainFlexs = new createElem("div", null, "mainFlexs", mainFlexDiv1);
    if (i == 0) {
      for (let k = 0; k < flexsArr[i].length; k++) {
        flexsIcon = new createElem(
          "img",
          flexsArr[i][k].src,
          "firstFlexsIcon",
          mainFlexs
        );
      }
    } else {
      flexsIcon = new createElem(
        "img",
        flexsArr[i].src,
        "flexsIcon",
        mainFlexs
      );
    }
    let flexsText = new createElem("h3", null, "flexsText", mainFlexs);
  }
  let mainFlexDiv2 = new createElem("div", null, "mainFlexDiv2", mainFlexDiv);
  for (let i = 0; i < 9; i++) {
    mainFlexs = new createElem("div", null, "mainFlexs2", mainFlexDiv2);
    flexsIcon = new createElem("img", flexsArr2[i].src, "flexsIcon", mainFlexs);
    let flexsText = new createElem("h3", null, "flexsText2", mainFlexs);
  }
  let btnSecond = new createElem("button", null, "btnSecond", mainFlex);
  btnSecond.addEventListener("click", () => {
    let firstDiv = parseInt(getComputedStyle(mainFlexDiv1).right);
    let secondDiv = parseInt(getComputedStyle(mainFlexDiv2).left);
    if (firstDiv == 0 && secondDiv == 490) {
      let handler = setInterval(() => {
        firstDiv += 10;
        secondDiv -= 10;
        mainFlexDiv1.style.right = firstDiv + "px";
        mainFlexDiv2.style.left = secondDiv + "px";
        if (firstDiv == 490 && secondDiv == 0) {
          clearInterval(handler);
        }
      }, 15);
    }
  });
  let mainRightIcon = new createElem(
    "img",
    "images/mainRightIcon.png",
    "mainIcon",
    btnSecond
  );
  let mainAdvertRight = new createElem("div", null, "mainAdvertRight", main);
  let footer = new createElem("div", null, "footer", container);
  let footerText = new createElem("p", null, "footerText", footer);
}

Create();

let second = null;
function timer() {
  second = moment().format("ss");
  let handler = setInterval(() => {
    advert();
    second++;
    $(".pTime")[0].innerText = moment().format(
      "h:mm:" + second + " Do MMMM dddd"
    );
    if (second == 60) {
      second = 0;
    }
  }, 1000);
}
timer();

for (let i = 0; i < topPartArr.length; i++) {
  if (i == 5) {
    $(".flexElem")[i].addEventListener("click", () => {
      localStorage.chooseprovider = topPartJs[i].src;
      document.location.href = "choosePart.html";
    });
  } else {
    $(".flexElem")[i].addEventListener("click", () => {
      localStorage.passprovider = topPartJs[i].src;
      localStorage.provider = topPartJs[i].mainSrc;
      localStorage.css = topPartJs[i].mainHref;
      document.location.href = "password.html";
    });
  }
}

for (let i = 0; i < flexsArr.length; i++) {
  $(".mainFlexs")[i].addEventListener("click", () => {
    localStorage.css = jsArr[i].href;
    localStorage.provider = jsArr[i].src;
    document.location.href = "provider.html";
  });
}
for (let i = 0; i < flexsArr2.length; i++) {
  $(".mainFlexs2")[i].addEventListener("click", () => {
    localStorage.css = jsArr2[i].href;
    localStorage.provider = jsArr2[i].src;
    document.location.href = "provider.html";
  });
}

function rotate() {
  for (let i = 0; i < $(".logoFlag").length; i++) {
    let numb = 0;

    let handler = setInterval(() => {
      $(".logoFlag")[i].style.transform = "rotateY(" + numb + "deg)";
      numb += 10;
      if (numb == 360) {
        numb = 0;
      }
    }, 100);
  }
}

rotate();
