const Dice {
    constructor(rollNumber) {
        this.d = rollNumber;
        this.rollCalc = function() { //function for calculating roll and displaying to html/console
            let diceDisplay = document.getElementById('last-roll') //shortcut to 'Last Roll' html
            let diceNum = document.getElementById('input-d' + rollNumber).value; //gets value from input

            let dice = Math.floor(Math.random()* (rollNumber * diceNum)) + 1; //dice roll (mutates per dice)
            diceDisplay.textContent = dice;
            console.log(diceNum + ' dice rolled');
        };
        this.click = document.getElementById('roll-d' + rollNumber).addEventListener('click', this.rollCalc);
    }
};

const diceD4 = new Dice(4);
const diceD6 = new Dice(6);
const diceD8 = new Dice(8);
const diceD10 = new Dice(10);
const dice12 = new Dice(12);
const dice20 = new Dice(20);