let playDice = document.querySelector(".dice");

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

let redField = [];
let oneRed = document.querySelector(".button.red.one");
let twoRed = document.querySelector(".button.red.two");
let threeRed = document.querySelector(".button.red.three");
let fourRed = document.querySelector(".button.red.four");

let oneField = {
  "position" : {"bottom": 0, "left": 0},
  "present": 0
};
let startRed = document.querySelector(".red-start-box");

oneField.position.bottom= startRed.style.bottom;
oneField.position.left = startRed.style.left;
oneField.present = 0;
redField.push(oneField);

let boxTypes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for(let i=0;i<boxTypes.length;i++){
  let pos = boxTypes[i];
  let oneField = {
    "position" : {"bottom": 0, "left": 0},
    "present": 0
  };
  let selectClass = document.querySelector(`.${pos}.red-area`);
  oneField.position.bottom= selectClass.style.bottom;
  console.log(pos);
  oneField.position.left = selectClass.style.left;
  redField.push(oneField);    
}

let presentr1;
playDice.addEventListener("click", function(e){
    let idx = dice.roll();
    playDice.innerHTML = idx;
    if(idx==6 && threeRed.classList.contains("inactive")){
      threeRed.classList.add("active");
      threeRed.classList.remove("inactive");
      presentr1 = 0;
      threeRed.style.bottom = redField[0].position.bottom;
      threeRed.style.left = redField[0].position.left ;
      redField[0].position=1;
    }
    else if(threeRed.classList.contains("active") && presentr1+idx<11){
      redField[presentr1].present -=1;
      presentr1+=idx;
      redField[presentr1].present +=1;
      threeRed.style.bottom = redField[presentr1].position.bottom;
      threeRed.style.left = redField[presentr1].position.left;
    }
                 
});

