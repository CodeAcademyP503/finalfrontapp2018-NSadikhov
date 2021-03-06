let lengthNumb = 8;
function Create() {
  let container = new createElem("div", null, "container", document.body);
  let header = new createElem("div", null, "header", container);
  let logoPart = new createElem("div", null, "logoPart", header);
  logoPart.style.background = "rgb(204, 147, 22)";
  let logoImg = new createElem(
    "img",
    "images/azerisiq.png",
    "logoImg",
    logoPart
  );
  let inputPart = new createElem("div", null, "inputPart", header);
  let label = new createElem("label", null, "label", inputPart);
  label.for = "input";
  let br = new createElem("br", null, "br", inputPart);
  let input = new createElem("input", null, "input", inputPart);
  input.id = "input";
  let deleteBtn = new createElem("button", null, "deleteBtn", header);
  let deleteBtnIcon = new createElem(
    "img",
    "images/forward.png",
    "deleteBtnIcon",
    deleteBtn
  );
  let deleteBtnText = new createElem("h3", null, "deleteBtnText", deleteBtn);
  deleteBtn.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length - 1);
    Check();
  });
  let main = new createElem("div", null, "main", container);
  let keyFlexPart = new createElem("div", null, "keyFlexPart", main);
  
  keyboard(input, keyFlexPart, "keyFlexDiv", "keyFlexText", main);

  let footer = new createElem("div", null, "footer", container);
  let backBtn = new createElem("button", null, "backBtn", footer);
  let backIcon = new createElem(
    "img",
    "images/forward.png",
    "backIcon",
    backBtn
  );
  let backBtnText = new createElem("h3", null, "backBtnText", backBtn);
  backBtn.addEventListener("click", () => {
    document.location.href = "choosePart.html";
  });
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
    localStorage.pay = "js/payAzerisiq.js";
    document.location.href = "paymentPart.html";
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

function Check() {
  if ($(".input")[0].value.length == lengthNumb) {
    $(".input")[0].disabled = "disabled";
    $(".forwardBtn")[0].style.visibility = "visible";
  } else {
    $(".input")[0].disabled = false;
    $(".forwardBtn")[0].style.visibility = "hidden";
  }
}
