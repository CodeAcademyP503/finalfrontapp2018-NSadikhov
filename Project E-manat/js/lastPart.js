
function Create() {
  let container = new createElem("div", null, "container", document.body);
  
  let main = new createElem("div", null, "main", container);
  let mainDiv = new createElem("div", null, "mainDiv", main);
  let mainText = new createElem("h1",null,"mainText", mainDiv);
  
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
