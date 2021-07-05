
// Dice function //
let playDice = document.querySelector(".dice");

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
// ------------ // 


let boxTypes = ["start", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let finalBox = ["one", "two", "three", "four", "five"];

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

let redPresentIdx = [0,0,0,0];
let greenPresentIdx = [0,0,0,0];
let yellowPresentIdx = [0,0,0,0];
let bluePresentIdx = [0,0,0,0];

let turn = 0;

function redEventListner() {
  oneRed.addEventListener("click", function (e) {
    moveForward(e, redField, redPresentIdx);
  }, { once: true });
  twoRed.addEventListener("click", function (e) {
    moveForward(e, redField, redPresentIdx);
  }, { once: true });
  threeRed.addEventListener("click", function (e) {
    moveForward(e, redField, redPresentIdx);
  }, { once: true });
  fourRed.addEventListener("click", function (e) {
    moveForward(e, redField, redPresentIdx);
  }, { once: true });
}

function greenEventListner() {
  oneGreen.addEventListener("click", function (e) {
    moveForward(e, greenField, greenPresentIdx);
  }, { once: true });
  twoGreen.addEventListener("click", function (e) {
    moveForward(e, greenField, greenPresentIdx);
  }, { once: true });
  threeGreen.addEventListener("click", function (e) {
    moveForward(e, greenField, greenPresentIdx);
  }, { once: true });
  fourGreen.addEventListener("click", function (e) {
    moveForward(e, greenField, greenPresentIdx);
  }, { once: true });
}

function yellowEventListner() {
  oneYellow.addEventListener("click", function (e) {
    moveForward(e, yellowField, yellowPresentIdx);
  }, { once: true });
  twoYellow.addEventListener("click", function (e) {
    moveForward(e, yellowField, yellowPresentIdx);
  }, { once: true });
  threeYellow.addEventListener("click", function (e) {
    moveForward(e, yellowField, yellowPresentIdx);
  }, { once: true });
  fourYellow.addEventListener("click", function (e) {
    moveForward(e, yellowField, yellowPresentIdx);
  }, { once: true });
}

function blueEventListner() {
  oneBlue.addEventListener("click", function (e) {
    moveForward(e, blueField, bluePresentIdx);
  }, { once: true });
  twoBlue.addEventListener("click", function (e) {
    moveForward(e, blueField, bluePresentIdx);
  }, { once: true });
  threeBlue.addEventListener("click", function (e) {
    moveForward(e, blueField, bluePresentIdx);
  }, { once: true });
  fourBlue.addEventListener("click", function (e) {
    moveForward(e, blueField, bluePresentIdx);
  }, { once: true });
}
let colorEventListner = [redEventListner, greenEventListner, yellowEventListner, blueEventListner];


playDice.addEventListener("click", function (e) {
  let idx = dice.roll();
  playDice.innerHTML = idx;
  turn = 1;
  colorEventListner[2]();
});



function moveForward(e, db, presentIdx) {
  if (turn != 1) {
    return;
  }
  let index = parseInt(document.querySelector(".dice").innerHTML);
  if (index == 6 && e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    e.srcElement.style.bottom = db[0].position.bottom;
    e.srcElement.style.left = db[0].position.left;
    db[0].present += 1;
    turn = 0;
  }
  else if (e.target.classList.contains("active")) {
    let pos = updatePosition(e, index, db, presentIdx);
    db[pos].present += 1;
    e.srcElement.style.bottom = db[pos].position.bottom;
    e.srcElement.style.left = db[pos].position.left;
    turn = 0;
  }
}


function updatePosition(e, index, db, presentIdx) {
  let pos;
  if (e.target.classList.contains("one")) {
    db[presentIdx[0]].present -= 1;
    presentIdx[0] += index;
    pos = presentIdx[0];
  } else if (e.target.classList.contains("two")) {
    db[presentIdx[1]].present -= 1;
    presentIdx[1] += index;
    pos = presentIdx[1];
  }
  else if (e.target.classList.contains("three")) {
    db[presentIdx[2]].present -= 1;
    presentIdx[2] += index;
    pos = presentIdx[2];
  }
  else {
    db[presentIdx[3]].present -= 1;
    presentIdx[3] += index;
    pos = presentIdx[3];
  }
  return pos;
}
