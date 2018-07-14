let flexArr = [
  {
    src: ""
  },
  {
    src: "images/leykemiya.png"
  },
  {
    src: "images/inaye.png"
  },
  {
    src: "images/mescid.png"
  }
];

let jsArr = [
  {
    src: "js/password/umidyeri.js"
  },
  {
    src: "js/password/leykemiya.js"
  },
  {
    src: "js/password/inaye.js"
  },
  {
    src: "js/password/mirtagi.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/charity.png", "icon", iconPart);
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
      firstText.innerText = "ÜMİD YERİ";
    } else if (i == 1) {
      let secondText = new createElem("h3", null, "secondText", flexDiv);
      secondText.innerText = "Leykemiya ilə Mübarizə";
    } else if (i == 3) {
      let thirdText = new createElem("h5", null, "thirdText", flexDiv);
      thirdText.innerText = "MİRTAĞI MƏSCİDİ DİNİ İCMASI";
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

