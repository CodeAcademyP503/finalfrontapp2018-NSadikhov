for (let i = 0; i < 4; i++) {
  let advertImg = new createElem(
    "img",
    "",
    "advertImg",
    $(".mainAdvertLeft")[0]
  );
  let advertImgRight =  new createElem(
    "img",
    "",
    "advertImgRight",
    $(".mainAdvertRight")[0]
  );
}
let dekabr31 = [
  {
    src: "images/31dekabr.jpg"
  },
  {
    src: "images/31dekabr2.jpg"
  },
  {
    src: "images/31dekabr3.jpg"
  },
  {
    src: "images/31dekabr4.jpg"
  }
];
let mart8 = [
  {
    src: "images/8mart.jpg"
  },
  {
    src: "images/8mart2.jpg"
  },
  {
    src: "images/8mart3.jpg"
  },
  {
    src: "images/8mart4.jpg"
  }
];
let may28 = [
  {
    src: "images/28may.jpg"
  },
  {
    src: "images/28may2.jpg"
  },
  {
    src: "images/28may3.jpg"
  },
  {
    src: "images/28may4.jpg"
  }
];
let may9 = [
  {
    src: "images/9may.jpg"
  },
  {
    src: "images/9may2.jpg"
  },
  {
    src: "images/9may3.jpg"
  },
  {
    src: "images/9may4.jpg"
  }
];
let daily = [
  {
    src: "images/bereket.png"
  },
  {
    src: "images/netpay.png"
  },
  {
    src: "images/yaxintaxi.png"
  },
  {
    src: "images/embafinans.jpg"
  }
];
let rightPart = [
  {
    src: "images/1bakcell.jpg"
  },
  {
    src: "images/2bakcell.jpg"
  },
  {
    src: "images/3bakcell.jpg"
  }
];
for (let i = 0; i < $(".advertImg").length; i++) {
  let handler = setInterval(() => {
    let style = parseFloat(getComputedStyle($(".advertImg")[i]).top);
    style += 5;
    $(".advertImg")[i].style.top = style + "px";
    if (style == 390) {
      $(".advertImg")[i].style.top = "-130px";
    }
  }, 40);
}

function advert() {
  if ($(".mainAdvertLeft")[0]) {
    let time = moment().format("Do MMMM");
    if (time == "28 May" || time == "28 May" || time == "28 май") {
      for (let i = 0; i < may28.length; i++) {
        $(".advertImg")[i].src = may28[i].src;
      }
    } else if (time == "8 Mart" || time == "8 March" || time == "8 марш") {
      for (let i = 0; i < mart8.length; i++) {
        $(".advertImg")[i].src = mart8[i].src;
      }
    } else if (time == "9 May" || time == "9 май") {
      for (let i = 0; i <  may9.length; i++) {
        $(".advertImg")[i].src = may9[i].src;
      }
    } else if (time == "31 Dekabr" || time == "31 December" || time == "31 декабрь") {
      for (let i = 0; i < dekabr31.length; i++) {
        $(".advertImg")[i].src = dekabr31[i].src;
      }
    } else {
      for (let i = 0; i < daily.length; i++) {
        $(".advertImg")[i].src = daily[i].src;
      }
    }
  } 
   if ($(".mainAdvertRight")[0]) {
    for (let i = 0; i < 3; i++) {
      $(".advertImgRight")[i].src = rightPart[i].src;
    }
  }
}
