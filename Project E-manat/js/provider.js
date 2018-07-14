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

let creation = new createElem(
  "script",
  localStorage.provider,
  "creation",
  document.body
);

let createCss = new createElem("link", null, "createCss", document.head);
createCss.rel = "stylesheet";
createCss.href = localStorage.css;
