//Create click event listener for each dice (id = "dice-"" + 4/6/8/10/12/20)
//Click event = roll dice: let dice = Math.floor(Math.random()* (rollNumber * diceNum)) + 1;
//Multiply dice by value of input (id = "input-d" + 4/6/8/10/12/20)
//

const Dice = function(rollNumber) { //constructor for per dice functions
    this.d = rollNumber;
    this.DOM = document.getElementById('dice-' + rollNumber);
    this.multDOM = document.getElementById('input-d' + rollNumber);
    this.roll = []; //saved value of last roll output

    this.rollCalc = function() { //roll function
        let diceMult, dice;

        diceMult = document.getElementById('input-d' + rollNumber).value;
        dice = Math.floor(Math.random()* (rollNumber * diceMult)) + 1;

        return this.roll = dice;
    };

    this.displayRoll = function() { //update last roll display
        let display = document.getElementById('last-roll');

        display.classList.add('change');
        
        setTimeout(() => {
            display.classList.remove('change');
        }, 350);

        display.textContent = this.roll;
    };
};

const d4 = new Dice(4);
const d6 = new Dice(6);
const d8 = new Dice(8);
const d10 = new Dice(10);
const d12 = new Dice(12);
const d20 = new Dice(20);

const allDice = [d4, d6, d8, d10, d12, d20]; //all dice array for looping

allDice.forEach(element => { //add event listener to every dice
    element.DOM.addEventListener('click', function() {
        //rolls dice w/multiplier
        element.rollCalc();
        //updates display
        element.displayRoll();
    });
});

(function init() { //initialize each dice multiplier as value 1
    allDice.forEach(element => {
        element.multDOM.value = 1;
    });
})();