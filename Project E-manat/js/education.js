let flexArr = [
  {
    src: "images/imtahan.png"
  },
  {
    src: "images/sinaq.jpg"
  },
  {
    src: "images/innab.png"
  },
  {
    src: "images/step.png"
  },
  {
    src: "images/teorem.png"
  },
  {
    src: "images/onlinehazirliqkursu.png"
  },
  {
    src: "images/edutech.png"
  },
  {
    src: "images/tehsiltexnologiya.jpg"
  }
];

let jsArr = [
  {
    src: "js/password/dim.js"
  },
  {
    src: "js/password/sinaqimtahani.js"
  },
  {
    src: "js/password/innab.js"
  },
  {
    src: "js/password/step.js"
  },
  {
    src: "js/password/teorem.js"
  },
  {
    src: "js/password/onlinehazirliq.js"
  },
  {
    src: "js/password/edutech.js"
  },
  {
    src: "js/password/ite.js"
  }
];

function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let iconPart = new createElem("div", null, "iconPart", header);
  let icon = new createElem("img", "images/education.png", "icon", iconPart);
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
    if (i == 1) {
      let firstText = new createElem("h2", null, "firstText", flexDiv);
      firstText.innerText = "Sinaqimtahani.Net";
    }
    else if(i==5){
        let secondText= new createElem("h3",null,"secondText",flexDiv);
        secondText.innerText="''ONLINE'' HAZIRLIQ KURSU";
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
