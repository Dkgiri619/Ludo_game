let playDice = document.querySelector(".dice");

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


let boxTypes = ["start", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let finalBox = ["one", "two", "three", "four", "five"];

let redField = [];

//red buttons
let oneRed = document.querySelector(".button.red.one");
let twoRed = document.querySelector(".button.red.two");
let threeRed = document.querySelector(".button.red.three");
let fourRed = document.querySelector(".button.red.four");

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

function updateBoxTypes(selector) {
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
    redField.push(oneField);
  }
}

function updateEnterPrev(selector) {
  let oneField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };
  let enterClass = document.querySelector(`.enter.${selector}`);
  oneField.position.bottom = enterClass.style.bottom;
  oneField.position.left = enterClass.style.left;
  redField.push(oneField);
  let otherField = {
    "position": { "bottom": 0, "left": 0 },
    "present": 0
  };

  let previousClass = document.querySelector(`.previous.${selector}`);
  otherField.position.bottom = previousClass.style.bottom;
  otherField.position.left = previousClass.style.left;
  redField.push(otherField);
}

//redfield update
(function updateRedField() {
  updateBoxTypes("red-area");
  updateEnterPrev("green-area");
  updateBoxTypes("green-area");
  updateEnterPrev("yellow-area");
  updateBoxTypes("yellow-area");
  updateEnterPrev("blue-area");
  updateBoxTypes("blue-area");
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

function isPresentAt() {
  for (let i = 0; i < redField.length; i++) {
    if (redField[i].present == 1) {
      console.log(i);
    }
  }
}

let presentr1 = 0;
let presentr2 = 0;
let presentr3 = 0;
let presentr4 = 0;

let turn = 0;



playDice.addEventListener("click", function (e) {
  let idx = dice.roll();
  playDice.innerHTML = idx;
  turn=1;
  redEventListner();
});

function redEventListner() {
  oneRed.addEventListener("click", function (e) {
    moveForward(e);
  }, { once: true });
  twoRed.addEventListener("click", function (e) {
    moveForward(e);
  }, { once: true });
  threeRed.addEventListener("click", function (e) {
    moveForward(e);
  }, { once: true });
  fourRed.addEventListener("click", function (e) {
    moveForward(e);
  }, { once: true });
}

function moveForward(e) {
  if(turn!=1){
    return;
  }
  let index = parseInt(document.querySelector(".dice").innerHTML);
  if (index == 6 && e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    e.srcElement.style.bottom = redField[0].position.bottom;
    e.srcElement.style.left = redField[0].position.left;
    redField[0].present += 1;
    turn = 0;
  }
  else if (e.target.classList.contains("active")) {
    let pos;
    if (e.target.classList.contains("one")) {
      redField[presentr1].present -= 1;
      presentr1 += index;
      pos = presentr1;
    } else if (e.target.classList.contains("two")) {
      redField[presentr2].present -= 1;
      presentr2 += index;
      pos = presentr2;
    }
    else if (e.target.classList.contains("three")) {
      redField[presentr3].present -= 1;
      presentr3 += index;
      pos = presentr3;
    }
    else {
      redField[presentr4].present -= 1;
      presentr4 += index;
      pos = presentr4;
    }
    redField[pos].present += 1;
    console.log(pos);
    e.srcElement.style.bottom = redField[pos].position.bottom;
    e.srcElement.style.left = redField[pos].position.left;
    turn = 0;
  }
}

