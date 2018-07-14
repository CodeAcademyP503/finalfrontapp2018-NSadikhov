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
  localStorage.pay,
  "creation",
  document.body
);



