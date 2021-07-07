
// Dice function //
let redDice = document.querySelector(".red-dice");
let greenDice = document.querySelector(".green-dice");
let yellowDice = document.querySelector(".yellow-dice");
let blueDice = document.querySelector(".blue-dice");

let moves = 0;


var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
function diceRun(e){
  let idx = dice.roll()
  e.target.innerText = parseInt(idx);
  colorEventListner[moves](idx);
}
// ------------ // 


let boxTypes = ["start", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let finalBox = ["one", "two", "three", "four", "five"];
let colors = ["red", "green", "yellow", "blue"];


let redField = [];
let greenField = [];
let yellowField = [];
let blueField = [];

//red buttons
let oneRed = document.querySelector(".button.red.one");
let twoRed = document.querySelector(".button.red.two");
let threeRed = document.querySelector(".button.red.three");
let fourRed = document.querySelector(".button.red.four");
// green buttons
let oneGreen = document.querySelector(".button.green.one");
let twoGreen = document.querySelector(".button.green.two");
let threeGreen = document.querySelector(".button.green.three");
let fourGreen = document.querySelector(".button.green.four");
// yellow buttons
let oneYellow = document.querySelector(".button.yellow.one");
let twoYellow = document.querySelector(".button.yellow.two");
let threeYellow = document.querySelector(".button.yellow.three");
let fourYellow = document.querySelector(".button.yellow.four");
// blue buttons
let oneBlue = document.querySelector(".button.blue.one");
let twoBlue = document.querySelector(".button.blue.two");
let threeBlue = document.querySelector(".button.blue.three");
let fourBlue = document.querySelector(".button.blue.four");

let allButtons = [oneRed, twoRed, threeRed, fourRed, oneGreen, twoGreen, threeGreen, fourGreen, oneYellow, twoYellow, 
  threeYellow, fourYellow, oneBlue, twoBlue, threeBlue, fourBlue];

function finalTypeBoxes(selector, db) {
  for (let i = 0; i < finalBox.length; i++) {
    let pos = finalBox[i];
    let finalSelector = document.querySelector(`.final.${pos}.${selector}`);
    let oneField = {
      "position": { "bottom": 0, "left": 0 },
      "present": 0
    };
    oneField.position.bottom = finalSelector.style.bottom;
    oneField.position.left = finalSelector.style.left;
    db.push(oneField);
  }
}

function updateBoxTypes(selector, db) {
  for (let i = 0; i < boxTypes.length; i++) {
    let pos = boxTypes[i];
    let oneField = {
      "position": { "bottom": 0, "left": 0 },
      "present": 0
    };
    let selectClass = document.querySelector(`.${pos}.${selector}`);
    oneField.position.bottom = selectClass.style.bottom;
    // console.log(pos);
    oneField.position.left = selectClass.style.left;
    db.push(oneField);
  }
}

function updateEnterPrev(selector, db) {
  let oneField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };
  let enterClass = document.querySelector(`.enter.${selector}`);
  oneField.position.bottom = enterClass.style.bottom;
  oneField.position.left = enterClass.style.left;
  db.push(oneField);
  let otherField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };

  let previousClass = document.querySelector(`.previous.${selector}`);
  otherField.position.bottom = previousClass.style.bottom;
  otherField.position.left = previousClass.style.left;
  db.push(otherField);
}

// db update
(function updateRedField() {
  updateBoxTypes("red-area", redField);
  updateEnterPrev("green-area", redField);
  updateBoxTypes("green-area", redField);
  updateEnterPrev("yellow-area", redField);
  updateBoxTypes("yellow-area", redField);
  updateEnterPrev("blue-area", redField);
  updateBoxTypes("blue-area", redField);
  let oneField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };
  let enterredClass = document.querySelector(".enter.red-area");
  oneField.position.bottom = enterredClass.style.bottom;
  oneField.position.left = enterredClass.style.left;
  redField.push(oneField);
  finalTypeBoxes("red-area", redField);

})();

(function updateGreenField() {
  updateBoxTypes("green-area", greenField);
  updateEnterPrev("yellow-area", greenField);
  updateBoxTypes("yellow-area", greenField);
  updateEnterPrev("blue-area", greenField);
  updateBoxTypes("blue-area", greenField);
  updateEnterPrev("red-area", greenField);
  updateBoxTypes("red-area", greenField);
  let oneField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };
  let enterredClass = document.querySelector(".enter.green-area");
  oneField.position.bottom = enterredClass.style.bottom;
  oneField.position.left = enterredClass.style.left;
  greenField.push(oneField);
  finalTypeBoxes("green-area", greenField);
})();

(function updateYellowField() {
  updateBoxTypes("yellow-area", yellowField);
  updateEnterPrev("blue-area", yellowField);
  updateBoxTypes("blue-area", yellowField);
  updateEnterPrev("red-area", yellowField);
  updateBoxTypes("red-area", yellowField);
  updateEnterPrev("green-area", yellowField);
  updateBoxTypes("green-area", yellowField);
  let oneField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };
  let enterredClass = document.querySelector(".enter.yellow-area");
  oneField.position.bottom = enterredClass.style.bottom;
  oneField.position.left = enterredClass.style.left;
  yellowField.push(oneField);
  finalTypeBoxes("yellow-area", yellowField);
})();

(function updateBlueField() {
  updateBoxTypes("blue-area", blueField);
  updateEnterPrev("red-area", blueField);
  updateBoxTypes("red-area", blueField);
  updateEnterPrev("green-area", blueField);
  updateBoxTypes("green-area", blueField);
  updateEnterPrev("yellow-area", blueField);
  updateBoxTypes("yellow-area", blueField);
  let oneField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };
  let enterredClass = document.querySelector(".enter.blue-area");
  oneField.position.bottom = enterredClass.style.bottom;
  oneField.position.left = enterredClass.style.left;
  blueField.push(oneField);
  finalTypeBoxes("blue-area", blueField);
})();

// check buttons position
function isPresentAt(db) {
  for (let i = 0; i < redField.length; i++) {
    if (db[i].present == 1) {
      console.log(i);
    }
  }
}

let redPresentIdx = [-1, -1, -1, -1, "r"];
let greenPresentIdx = [-1, -1, -1, -1, "g"];
let yellowPresentIdx = [-1, -1, -1, -1, "y"];
let bluePresentIdx = [-1, -1, -1, -1, "b"];


function inRed(e) {
  moveForward(e, redField, redPresentIdx);
}
function inGreen(e) {
  moveForward(e, greenField, greenPresentIdx);
}
function inYellow(e) {
  moveForward(e, yellowField, yellowPresentIdx);
}
function inBlue(e) {
  moveForward(e, blueField, bluePresentIdx);
}
function checkForActive(presentIdx){
  for(let i =0 ;i<presentIdx.length-1;i++){
    if(presentIdx[i]!=-1)return true;
  }
  return false;
}
function redEventListner(idx) {
  let index = idx;
  if(index!=6 && !checkForActive(redPresentIdx)){
    moves = (moves+1)%4;  
    setTimeout(5000);
    playDiceFun();
  }
  else if(index==6){
    oneRed.addEventListener("click", inRed);
    twoRed.addEventListener("click", inRed);
    threeRed.addEventListener("click", inRed);
    fourRed.addEventListener("click", inRed);
  }
  else{
    if(oneRed.classList.contains("active"))
      oneRed.addEventListener("click", inRed);
    if(twoRed.classList.contains("active"))  
      twoRed.addEventListener("click", inRed);
    if(threeRed.classList.contains("active"))
      threeRed.addEventListener("click", inRed);
    if(fourRed.classList.contains("active"))
      fourRed.addEventListener("click", inRed);
  }
}

function greenEventListner(idx) {
  let index = idx;
  if(index!=6 && !checkForActive(greenPresentIdx)){
    moves = (moves+1)%4;  
    setTimeout(5000);
    playDiceFun();
  }
  else if(index==6){
    oneGreen.addEventListener("click", inGreen);
    twoGreen.addEventListener("click", inGreen);
    threeGreen.addEventListener("click", inGreen);
    fourGreen.addEventListener("click", inGreen);
  }
  else{
    if(oneGreen.classList.contains("active"))
      oneGreen.addEventListener("click", inGreen);
    if(twoGreen.classList.contains("active"))  
      twoGreen.addEventListener("click", inGreen);
    if(threeGreen.classList.contains("active"))
      threeGreen.addEventListener("click", inGreen);
    if(fourGreen.classList.contains("active"))
      fourGreen.addEventListener("click", inGreen);
  }
}

function yellowEventListner(idx) {
  let index = idx;
  if(index!=6 && !checkForActive(yellowPresentIdx)){
    moves = (moves+1)%4;  
    setTimeout(5000);
    playDiceFun();
  }
  else if(index==6){
    oneYellow.addEventListener("click", inYellow);
    twoYellow.addEventListener("click", inYellow);
    threeYellow.addEventListener("click", inYellow);
    fourYellow.addEventListener("click", inYellow);
  }
  else{
    if(oneYellow.classList.contains("active"))
      oneYellow.addEventListener("click", inYellow);
    if(twoYellow.classList.contains("active"))  
      twoYellow.addEventListener("click", inYellow);
    if(threeYellow.classList.contains("active"))
      threeYellow.addEventListener("click", inYellow);
    if(fourYellow.classList.contains("active"))
      fourYellow.addEventListener("click", inYellow);
  }
}

function blueEventListner(idx) {
  let index = idx;
  if(index!=6 && !checkForActive(bluePresentIdx)){
    moves = (moves+1)%4;  
    setTimeout(5000);
    playDiceFun();
  }
  else if(index==6){
    oneBlue.addEventListener("click", inBlue);
    twoBlue.addEventListener("click", inBlue);
    threeBlue.addEventListener("click", inBlue);
    fourBlue.addEventListener("click", inBlue);
  }
  else{
    if(oneBlue.classList.contains("active"))
      oneBlue.addEventListener("click", inBlue);
    if(twoBlue.classList.contains("active"))  
      twoBlue.addEventListener("click", inBlue);
    if(threeBlue.classList.contains("active"))
      threeBlue.addEventListener("click", inBlue);
    if(fourBlue.classList.contains("active"))
      fourBlue.addEventListener("click", inBlue);
  }
}


function removeAllEventListner(){
  for(let i =0 ;i<allButtons.length;i++){
    let buttn = allButtons[i];
    if(i<=3){
      buttn.removeEventListener("click", inRed);
    }else if(i<=7) buttn.removeEventListener("click", inGreen);
    else if(i<=11) buttn.removeEventListener("click", inYellow);
    else buttn.removeEventListener("click", inBlue);
  }
  console.log("removed");
}


let colorEventListner = [redEventListner, greenEventListner, yellowEventListner, blueEventListner];

function playDiceFun(){
  if(moves==0){
    redDice.innerText = "Play";
    redDice.addEventListener("click", diceRun, {once:true});
    try {
      blueDice.classList.remove("animateDice"); 
    } catch(error) {
      console.log(error);
    }  
    redDice.classList.add("animateDice");
  }
  else if(moves==1){
    greenDice.innerText = "Play";
    greenDice.addEventListener("click", diceRun, {once:true});
    redDice.classList.remove("animateDice");
    greenDice.classList.add("animateDice");
  }else if(moves==2){
    yellowDice.innerText = "Play";
    yellowDice.addEventListener("click", diceRun, {once:true});
    greenDice.classList.remove("animateDice");
    yellowDice.classList.add("animateDice");
  }else{
    blueDice.innerText = "Play";
    blueDice.addEventListener("click", diceRun, {once:true});
    yellowDice.classList.remove("animateDice");
    blueDice.classList.add("animateDice");
  }
};

playDiceFun();

function moveForward(e, db, presentIdx) {
  let index;
  if(presentIdx[4]=="r"){
    index = parseInt(redDice.innerText);
  }else if(presentIdx[4]=="g") index = parseInt(greenDice.innerText);
  else if(presentIdx[4]=="y") index = parseInt(yellowDice.innerText);
  else index = parseInt(blueDice.innerText);
  if (index == 6 && e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    let pos = updatePosition(e, index, db, presentIdx);
    e.srcElement.style.bottom = db[0].position.bottom;
    e.srcElement.style.left = db[0].position.left;   
  }
  else if (e.target.classList.contains("active")) {
    let pos = updatePosition(e, index, db, presentIdx);
    db[pos].present += 1;
    e.srcElement.style.bottom = db[pos].position.bottom;
    e.srcElement.style.left = db[pos].position.left;
  }
  removeAllEventListner();
  if (index == 6) moves--;
  moves = (moves+1)%4;
  playDiceFun();
}


function updatePosition(e, index, db, presentIdx) {
  let pos;
  if (e.target.classList.contains("one")) {
    if (presentIdx[0] == -1){
      presentIdx[0] = 0;
      db[0].present += 1;
    }else{
      db[presentIdx[0]].present -= 1;
      presentIdx[0] += index;
      pos = presentIdx[0];
    }
  } else if (e.target.classList.contains("two")) {
    if (presentIdx[1] == -1) {
      presentIdx[1] = 0;
      db[0].present += 1;
    } else {
      db[presentIdx[1]].present -= 1;
      presentIdx[1] += index;
      pos = presentIdx[1];
    }
  }
  else if (e.target.classList.contains("three")) {
    if (presentIdx[2] == -1) {
      presentIdx[2] = 0;
      db[0].present += 1;
    } else {
      db[presentIdx[2]].present -= 1;
      presentIdx[2] += index;
      pos = presentIdx[2];
    }
  }
  else {
    if (presentIdx[3] == -1) {
      presentIdx[3] = 0;
      db[0].present += 1;
    } else {
      db[presentIdx[3]].present -= 1;
      presentIdx[3] += index;
      pos = presentIdx[3];
    }
  }
  return pos;
}



function checkForCut(){
  
}