let numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let keyboardArrUpper = [1,2,3,4,5,6,7,8,9,0,"_","+","/","Q","W","E","R","T","Y","U","I","O","P","{","}","~","A","S","D","F","G","H","J","K","L",":","*","TAB","Z","X","C","V","B","N","M","(",")","?","АБВ","Shift","CapsLock","","Delete all"];
let keyboardArrLower = [1,2,3,4,5,6,7,8,9,0,"-","=","|","q","w","e","r","t","y","u","i","o","p","[","]","@","a","s","d","f","g","h","j","k","l",";","'","TAB","z","x","c","v","b","n","m",",",".","/","АБВ","Shift","CapsLock","","Delete all"];


let lowCaps = false;
let checkShift = false;

function keyboard(inp, part, select, selectText, mainPart) {
    let langPart = new createElem("div",null,"langPart",mainPart);
    let langImg = new createElem("img","images/ING.png","langImg",langPart);
    let langText = new createElem("h3",null,"langText",langPart);
    langText.innerText="English";
    for (let i = 0; i < keyboardArrUpper.length; i++) {
    let select = new createElem("div", null, "keyFlexDiv", part);
    let selectText = new createElem("h3", null, "keyFlexText", select);
    
    selectText.innerText = keyboardArrUpper[i];

    select.addEventListener("click", () => {
      if (selectText.innerText == "CapsLock") {
        if (lowCaps == false) {
          lowCaps = true;
          for (let k = 0; k < keyboardArrLower.length; k++) {
            $(".keyFlexText")[k].innerText = keyboardArrLower[k];
          }
        } else if (lowCaps == true) {
          lowCaps = false;
          for (let k = 0; k < keyboardArrUpper.length; k++) {
            $(".keyFlexText")[k].innerText = keyboardArrUpper[k];
          }
        }
      } else if (selectText.innerText == "") {
        selectText.innerHTML = "&nbsp;";
        inp.value += selectText.innerText;
      } else if(selectText.innerText == "TAB"){
        inp.value = inp.value;
      } else if(selectText.innerText == "АБВ"){
        keyboardArrUpper = [1,2,3,4,5,6,7,8,9,0,"_","+","/","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ё","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","TAB","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","AZE","Shift","CapsLock","","Delete all"];
        keyboardArrLower = [1,2,3,4,5,6,7,8,9,0,"-","=","/","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ё","ф","ы","в","а","п","р","о","л","д","ж","э","TAB","я","ч","с","м","и","т","ь","б","ю",".","AZE","Shift","CapsLock","","Delete all"];
        langImg.src="images/RU.png";
        langText.innerText = "Русская";
        if(lowCaps==true){
            for (let k = 0; k < keyboardArrLower.length; k++) {
                $(".keyFlexText")[k].innerText = keyboardArrLower[k];
            }
        }
        else if(lowCaps==false){
            for(let k=0;k<keyboardArrUpper.length;k++){
                $(".keyFlexText")[k].innerText=keyboardArrUpper[k];
            }
        }

      } else if(selectText.innerText=="ABC"){
        keyboardArrUpper = [1,2,3,4,5,6,7,8,9,0,"_","+","/","Q","W","E","R","T","Y","U","I","O","P","{","}","~","A","S","D","F","G","H","J","K","L",":","*","TAB","Z","X","C","V","B","N","M","(",")","?","АБВ","Shift","CapsLock","","Delete all"];
        keyboardArrLower = [1,2,3,4,5,6,7,8,9,0,"-","=","|","q","w","e","r","t","y","u","i","o","p","[","]","@","a","s","d","f","g","h","j","k","l",";","'","TAB","z","x","c","v","b","n","m",",",".","/","АБВ","Shift","CapsLock","","Delete all"];
        langImg.src="images/ING.png";
        langText.innerText = "English";
        if(lowCaps == true){
            for (let k = 0; k < keyboardArrLower.length; k++) {
                $(".keyFlexText")[k].innerText = keyboardArrLower[k];
            }
        }
        else if(lowCaps == false){
            for(let k=0;k<keyboardArrUpper.length;k++){
                $(".keyFlexText")[k].innerText=keyboardArrUpper[k];
            }
        }
      } else if(selectText.innerText=="AZE"){
        keyboardArrUpper = [1,2,3,4,5,6,7,8,9,0,"_","+","/","Q","Ü","E","R","T","Y","U","I","O","P","Ö","Ğ","~","A","S","D","F","G","H","J","K","L","I","Ə","TAB","Z","X","C","V","B","N","M","Ç","Ş",",","ABC","Shift","CapsLock","","Delete all"];
        keyboardArrLower = [1,2,3,4,5,6,7,8,9,0,"-","=","|","q","ü","e","r","t","y","u","i","o","p","ö","ğ","@","a","s","d","f","g","h","j","k","l","ı","ə","TAB","z","x","c","v","b","n","m","ç","ş",".","ABC","Shift","CapsLock","","Delete all"];
        langImg.src="images/AZE.png";
        langText.innerText = "Azərbaycanca";
        if(lowCaps == true){
            for (let k = 0; k < keyboardArrLower.length; k++) {
                $(".keyFlexText")[k].innerText = keyboardArrLower[k];
            }
        }
        else if(lowCaps == false){
            for(let k=0;k<keyboardArrUpper.length;k++){
                $(".keyFlexText")[k].innerText=keyboardArrUpper[k];
            }
        }
      } else if (selectText.innerText == "Delete all") {
        inp.value = "";
      } else if (selectText.innerText == "Shift") {
          checkShift = true;
        if (lowCaps == false) {
          lowCaps = true;
          for (let k = 0; k < keyboardArrLower.length; k++) {
            $(".keyFlexText")[k].innerText = keyboardArrLower[k];
          }
        } else if (lowCaps == true) {
          lowCaps = false;
          for (let k = 0; k < keyboardArrUpper.length; k++) {
            $(".keyFlexText")[k].innerText = keyboardArrUpper[k];
          }
        }
      } else {
          if (inp.value.length < lengthNumb) {
          inp.value += selectText.innerText;
          checked();
          }
      }
      Check();
    });
  }
}

function checked() {
  if (checkShift == true) {
    checkShift = false;
    if(lowCaps == false){
        lowCaps = true;
        for (let k = 0; k < keyboardArrLower.length; k++) {
            $(".keyFlexText")[k].innerText = keyboardArrLower[k];
        }
    }
    else if(lowCaps == true){
        lowCaps = false;
        for (let k = 0; k < keyboardArrUpper.length; k++) {
            $(".keyFlexText")[k].innerText = keyboardArrUpper[k];
        }
    }
  }
}

function numbKeyboard(inp,selectText){
    inp.value += selectText.innerText;
}