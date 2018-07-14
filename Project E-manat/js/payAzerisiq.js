let Arr = [1, 5, 10, 20, 50, 100];
function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let inputPart = new createElem("div", null, "inputPart", header);
  let label = new createElem("label", null, "label", inputPart);
  label.for = "input";
  let input = new createElem("input", null, "input", inputPart);
  input.value = localStorage.input;
  input.id = "input";
  input.disabled = true;
  let main = new createElem("div", null, "main", container);
  let flexPart = new createElem("div", null, "flexPart", main);
  for (let i = 0; i < 6; i++) {
    let flexDiv = new createElem("div", null, "flexDiv", flexPart);
    flexText = new createElem("h1", null, "flexText", flexDiv);
    flexText.innerText = Arr[i];
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
    localStorage.input = input.value;
    localStorage.pay = "js/lastPart.js";
    document.location.href = "lastPart.html";
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

for (let i = 0; i < Arr.length; i++) {
  for (let k = 0; k < Arr.length; k++) {
    $(".flexDiv")[i].addEventListener("click", () => {
      $(".flexDiv")[k].style.color = "white";
      $(".flexDiv")[i].style.color = "rgb(35, 133, 212)";
      $(".forwardBtn")[0].style.visibility = "visible";
      localStorage.payment =  $(".flexText")[i].innerText;
    });
  }
}
