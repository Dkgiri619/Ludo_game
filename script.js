
// Dice function //
let redDice = document.querySelector(".red-dice");
let greenDice = document.querySelector(".green-dice");
let yellowDice = document.querySelector(".yellow-dice");
let blueDice = document.querySelector(".blue-dice");

let moves = 0;
let players = 4;

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
function diceRun(e) {
  let idx = dice.roll()
  e.target.innerText = parseInt(idx);
  let dicePlay = document.createElement("audio");
  dicePlay.src = "./sounds/ONEDICE.wav";
  dicePlay.play();
  colorEventListner[moves](idx);
}
// ------------ // 

let playerRed;
let playerGreen;
let playerYellow;
let playerBlue;

let rInput = document.querySelector(".r.player");
let gInput = document.querySelector(".g.player");
let yInput = document.querySelector(".y.player");
let bInput = document.querySelector(".b.player");

let submitButt = document.querySelector(".submit");
submitButt.addEventListener("click", function(){
  playerRed = rInput.innerHTML;
  playerGreen = gInput.innerHTML;
  playerYellow = yInput.innerHTML;
  playerBlue = bInput.innerHTML;
  let startPlay = document.createElement("audio");
  startPlay.src = "./sounds/start.mp3";
  startPlay.play();
  document.querySelector(".red-name").innerHTML = playerRed;
  document.querySelector(".green-name").innerHTML = playerGreen;
  document.querySelector(".yellow-name").innerHTML = playerYellow;
  document.querySelector(".blue-name").innerHTML = playerBlue;
  document.querySelector(".menuDiv").remove();
  document.querySelector('.enterName').remove();

})

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
let srtPosBut = []
for (let i = 0; i < 16; i++) {
  let posObject = {
    bottom: allButtons[i].style.bottom,
    left: allButtons[i].style.left
  };
  srtPosBut.push(posObject);
}
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
function checkForActive(presentIdx) {
  for (let i = 0; i < presentIdx.length - 1; i++) {
    if (presentIdx[i] != -1 && presentIdx[i] != 56) return true;
  }
  return false;
}

function removeZIndex(presentIdx) {
  let idx;
  if (presentIdx[4] == "r") {
    idx = 0;
  }
  else if (presentIdx[4] == "g") {
    idx = 4;
  }
  else if (presentIdx[4] == "y") {
    idx = 8;
  }
  else {
    idx = 12;
  }
  for (let i = 0; i < 4; i++) {
    let j = i + idx;
    allButtons[j].style.zIndex = 3;
  }
}



// Buttons Event Listner
function redEventListner(idx) {
  let index = idx;
  if (index != 6 && !checkForActive(redPresentIdx)) {
    moves = (moves + 1) % players;
    setTimeout(5000);
    playDiceFun();
  }
  else if (index == 6) {
    oneRed.addEventListener("click", inRed);
    twoRed.addEventListener("click", inRed);
    threeRed.addEventListener("click", inRed);
    fourRed.addEventListener("click", inRed);
    for (let i = 0; i < 4; i++) {
      allButtons[i].style.zIndex = 4;
    }
  }
  else {
    if (oneRed.classList.contains("active")) {
      oneRed.addEventListener("click", inRed);
      oneRed.style.zIndex = 4;
    }
    if (twoRed.classList.contains("active")) {
      twoRed.addEventListener("click", inRed);
      twoRed.style.zIndex = 4;
    }
    if (threeRed.classList.contains("active")) {
      threeRed.addEventListener("click", inRed);
      threeRed.style.zIndex = 4;
    }
    if (fourRed.classList.contains("active")) {
      fourRed.addEventListener("click", inRed);
      fourRed.style.zIndex = 4;
    }
  }
}

function greenEventListner(idx) {
  let index = idx;
  if (index != 6 && !checkForActive(greenPresentIdx)) {
    moves = (moves + 1) % players;
    setTimeout(5000);
    playDiceFun();
  }
  else if (index == 6) {
    oneGreen.addEventListener("click", inGreen);
    twoGreen.addEventListener("click", inGreen);
    threeGreen.addEventListener("click", inGreen);
    fourGreen.addEventListener("click", inGreen);
    for (let i = 4; i < 8; i++) {
      allButtons[i].style.zIndex = 4;
    }
  }
  else {
    if (oneGreen.classList.contains("active")) {
      oneGreen.style.zIndex = 4;
      oneGreen.addEventListener("click", inGreen);
    }
    if (twoGreen.classList.contains("active")) {
      twoGreen.style.zIndex = 4;
      twoGreen.addEventListener("click", inGreen);
    }
    if (threeGreen.classList.contains("active")) {
      threeGreen.style.zIndex = 4;
      threeGreen.addEventListener("click", inGreen);
    }
    if (fourGreen.classList.contains("active")) {
      fourGreen.style.zIndex = 4;
      fourGreen.addEventListener("click", inGreen);
    }
  }
}

function yellowEventListner(idx) {
  let index = idx;
  if (index != 6 && !checkForActive(yellowPresentIdx)) {
    moves = (moves + 1) % players;
    setTimeout(5000);
    playDiceFun();
  }
  else if (index == 6) {
    oneYellow.addEventListener("click", inYellow);
    twoYellow.addEventListener("click", inYellow);
    threeYellow.addEventListener("click", inYellow);
    fourYellow.addEventListener("click", inYellow);
    for (let i = 8; i < 12; i++) {
      allButtons[i].style.zIndex = 4;
    }
  }
  else {
    if (oneYellow.classList.contains("active")) {
      oneYellow.style.zIndex = 4;
      oneYellow.addEventListener("click", inYellow);
    }
    if (twoYellow.classList.contains("active")) {
      twoYellow.style.zIndex = 4;
      twoYellow.addEventListener("click", inYellow);
    }
    if (threeYellow.classList.contains("active")) {
      threeYellow.style.zIndex = 4;
      threeYellow.addEventListener("click", inYellow);
    }
    if (fourYellow.classList.contains("active")) {
      fourYellow.style.zIndex = 4;
      fourYellow.addEventListener("click", inYellow);
    }
  }
}

function blueEventListner(idx) {
  let index = idx;
  if (index != 6 && !checkForActive(bluePresentIdx)) {
    moves = (moves + 1) % players;
    setTimeout(5000);
    playDiceFun();
  }
  else if (index == 6) {
    oneBlue.addEventListener("click", inBlue);
    twoBlue.addEventListener("click", inBlue);
    threeBlue.addEventListener("click", inBlue);
    fourBlue.addEventListener("click", inBlue);
    for (let i = 12; i < 16; i++) {
      allButtons[i].style.zIndex = 4;
    }
  }
  else {
    if (oneBlue.classList.contains("active")) {
      oneBlue.addEventListener("click", inBlue);
      oneBlue.style.zIndex = 4;
    }
    if (twoBlue.classList.contains("active")) {
      twoBlue.addEventListener("click", inBlue);
      twoBlue.style.zIndex = 4;
    }
    if (threeBlue.classList.contains("active")) {
      threeBlue.addEventListener("click", inBlue);
      threeBlue.style.zIndex = 4;
    }
    if (fourBlue.classList.contains("active")) {
      fourBlue.addEventListener("click", inBlue);
      fourBlue.style.zIndex = 4;
    }
  }
}


function removeAllEventListner() {
  for (let i = 0; i < allButtons.length; i++) {
    let buttn = allButtons[i];
    if (i <= 3) {
      buttn.removeEventListener("click", inRed);
    } else if (i <= 7) buttn.removeEventListener("click", inGreen);
    else if (i <= 11) buttn.removeEventListener("click", inYellow);
    else buttn.removeEventListener("click", inBlue);
  }
}

let colorEventListner = [redEventListner, greenEventListner, yellowEventListner, blueEventListner];

function playDiceFun() {
  if (moves == 0) {
    redDice.innerText = "Play";
    redDice.addEventListener("click", diceRun, { once: true });
    try {
      blueDice.classList.remove("animateDice");
    } catch (error) {
      console.log(error);
    }
    redDice.classList.add("animateDice");
  }
  else if (moves == 1) {
    greenDice.innerText = "Play";
    greenDice.addEventListener("click", diceRun, { once: true });
    redDice.classList.remove("animateDice");
    greenDice.classList.add("animateDice");
  } else if (moves == 2) {
    yellowDice.innerText = "Play";
    yellowDice.addEventListener("click", diceRun, { once: true });
    greenDice.classList.remove("animateDice");
    yellowDice.classList.add("animateDice");
  } else {
    blueDice.innerText = "Play";
    blueDice.addEventListener("click", diceRun, { once: true });
    yellowDice.classList.remove("animateDice");
    blueDice.classList.add("animateDice");
  }
};

playDiceFun();


// heart of the game-----------------------------------------------------------------------
function moveForward(e, db, presentIdx) {
  let index;
  if (presentIdx[4] == "r") {
    index = parseInt(redDice.innerText);
  } else if (presentIdx[4] == "g") index = parseInt(greenDice.innerText);
  else if (presentIdx[4] == "y") index = parseInt(yellowDice.innerText);
  else index = parseInt(blueDice.innerText);
  let pass = false;
  let cut;
  if (index == 6 && e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    let pos = updatePosition(e, index, db, presentIdx);
    e.srcElement.style.bottom = db[0].position.bottom;
    e.srcElement.style.left = db[0].position.left;
  }
  else if (e.target.classList.contains("active")) {
    let pos = updatePosition(e, index, db, presentIdx);
    if (pos == 56) {
      e.target.style.display = "none";
      pass = true;
      let passPLay = document.createElement("audio");
      passPLay.src = "./sounds/pass.mp3";
      passPLay.play();
      checkForWin(presentIdx);
    } else if (pos < 56) {
      db[pos].present += 1;
      e.srcElement.style.bottom = db[pos].position.bottom;
      e.srcElement.style.left = db[pos].position.left;
      if (pos <= 50 && pos % 13 != 0) cut = checkForCut(pos, presentIdx);
      if (cut) {
        let cutPlay = document.createElement("audio");
        cutPlay.src = "./sounds/cut.mp3";
        cutPlay.play();
      }
    }
  }
  if (!cut && !pass) {
    let clickPlay = document.createElement("audio");
    clickPlay.src = "./sounds/click.mp3";
    clickPlay.play();
  }
  removeZIndex(presentIdx);
  removeAllEventListner();
  checkForWin(presentIdx);
  if (index == 6 || cut || pass) moves--;
  moves = (moves + 1) % players;
  playDiceFun();
}
//-----------------------------------------------------------------------------------

function updatePosition(e, index, db, presentIdx) {
  let pos;
  if (e.target.classList.contains("one")) {
    if (presentIdx[0] == -1) {
      presentIdx[0] = 0;
      db[0].present += 1;
    } else {
      if (presentIdx[0] + index > 56) return presentIdx[0] + index;
      db[presentIdx[0]].present -= 1;
      presentIdx[0] += index;
      pos = presentIdx[0];
    }
  } else if (e.target.classList.contains("two")) {
    if (presentIdx[1] == -1) {
      presentIdx[1] = 0;
      db[0].present += 1;
    } else {
      if (presentIdx[1] + index > 56) return presentIdx[1] + index;
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
      if (presentIdx[2] + index > 56) return presentIdx[2] + index;
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
      if (presentIdx[3] + index > 56) return presentIdx[3] + index;
      db[presentIdx[3]].present -= 1;
      presentIdx[3] += index;
      pos = presentIdx[3];
    }
  }
  return pos;
}

function checkForWin(presentIdx) {
  for (let i = 0; i < presentIdx.length - 1; i++) {
    if (presentIdx[i] != 56) return;
  }
  winner(presentIdx);
}
function winner(presentIdx) {
  let winnerColor;
  let winnerName;
  if (presentIdx[4] == "r") {
    winnerColor = "red";
    winnerName = playerRed;
  }
  else if (presentIdx[4] == "g") {
    winnerColor = "green";
    winnerName = playerGreen;
  }
  else if (presentIdx[4] == "y") {
    winnerColor = "yellow";
    winnerName = playerYellow;
  }
  else {
    winnerColor = "blue";
    winnerName = playerBlue;
  }
  let winnerDiv = document.createElement("div");
  winnerDiv.classList.add("winner-div");
  winnerDiv.style.backgroundColor = winnerColor;
  winnerDiv.innerHTML = ` <div class="medal-icon fas fa-medal"></div>
  <img src="./images/winner.png" class="winner-text">
  <div class="congratulation animateWinner">${winnerName}</div>`;
  document.body.append(winnerDiv);
  let winnerPlay = document.createElement("audio");
  winnerPlay.src = "./sounds/gtaPass.mp3";
  winnerPlay.play();

}


// Check for cutting algo
function checkForCut(pos, presentIdx) {
  let idx;
  let allDB = [redField, greenField, yellowField, blueField];
  if (presentIdx[4] == "r") idx = 0;
  else if (presentIdx[4] == "g") idx = 1;
  else if (presentIdx[4] == "y") idx = 2;
  else idx = 3;

  for (let i = 1; i <= 3; i++) {
    let field = (i + idx) % 4;
    if (i == 1) {
      let n;
      if (pos < 13) n = 39 + pos;
      else n = pos - 13;
      if (n <= 50 && allDB[field][n].present >= 1) {
        allDB[field][n].present -= 1;
        closeButton(allDB[field][n].position, field);
        return true;
      }
    }
    if (i == 2) {
      let n;
      if (pos < 26) n = 26 + pos;
      else n = pos - 26;
      if (n <= 50 && allDB[field][n].present >= 1) {
        allDB[field][n].present -= 1;
        closeButton(allDB[field][n].position, field);
        return true;
      }
    }
    if (i == 3) {
      let n;
      if (pos < 39) n = 13 + pos;
      else n = pos - 39;
      if (n <= 50 && allDB[field][n].present >= 1) {
        allDB[field][n].present -= 1;
        closeButton(allDB[field][n].position, field);
        return true;
      }
    }
  }
  return false;
}

function closeButton(positionObject, field) {
  let id;
  let presentIdx;
  if (field == 0) {
    id = 0;
    presentIdx = redPresentIdx;
  }
  else if (field == 1) {
    id = 4;
    presentIdx = greenPresentIdx;
  }
  else if (field == 2) {
    id = 8;
    presentIdx = yellowPresentIdx;
  }
  else {
    id = 12;
    presentIdx = bluePresentIdx;
  }
  for (let i = 0; i < 4; i++) {
    let idx = i + id;
    let butnElem = allButtons[idx];
    let startButPos = srtPosBut[idx];
    if (positionObject.bottom == butnElem.style.bottom && positionObject.left == butnElem.style.left) {
      butnElem.style.bottom = startButPos.bottom;
      butnElem.style.left = startButPos.left;
      butnElem.classList.remove("active");
      butnElem.classList.add("inactive");
      presentIdx[i] = -1;
    }
  }
}