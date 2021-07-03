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
let boxTypes = ["one", "two", "three", "four", "five", siz]

let oneField = {
  "position" : {"bottom": 0, "left": 0},
  "present": 0
};
let startRed = document.querySelector(".red-start-box");

oneField.position.bottom= startRed.style.bottom;
oneField.position.left = startRed.style.left;
oneField.present = 0;
redField.push(oneField);

playDice.addEventListener("click", function(e){
    let idx = dice.roll();
    playDice.innerHTML = idx;
    if(idx==6){
      threeRed.classList.add("active");
        threeRed.style.bottom = redField[0].position.bottom;
        threeRed.style.left = redField[0].position.left ;
    }
    if(threeRed.classList.contains("active")){

    }
                 
});

