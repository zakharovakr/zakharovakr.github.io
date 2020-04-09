var winAmount = 4;
var lossAmount = 1;
var rollCount;
var rollTotal;
var highestAmount;
var rollCountAtHighestAmount;

//returns a random nmber between 2-12
function roll() {
    var one = Math.floor(Math.random() * 6 + 1);
    var two = Math.floor(Math.random() * 6 + 1);
    rollTotal = one + two;
}


function play() {
    //grabbing the bet value
    var bet = Number(document.getElementById("startBet").value);
    if (bet <= 0) {
        alert("Your bet can't be less than 1$! ");
        return;
    }
    //inserting the value into the results table 
    document.getElementById("startBetDisplay").innerText = "$" + bet;


    //game loop
    var gameMoney = bet;
    rollCount = 0;
    highestAmount = 0;
    rollCountAtHighestAmount = 0;

    while (gameMoney > 0) {
        //roll
        roll();
        rollCount++;
        //checking if the user got 7 on both dice
        if (rollTotal === 7) {
            gameMoney += winAmount;

        } else {
            gameMoney -= lossAmount;

        }

        //checking money
        if (gameMoney > highestAmount) {
            highestAmount = gameMoney;
            rollCountAtHighestAmount = rollCount;
        }

        console.log("I got " + rollTotal + " this time.", "I have " + gameMoney + "$ left.", "I have rolled " + rollCount + " times.", "My biggest win at night is " + highestAmount + "$.", "I have rolled " + rollCountAtHighestAmount + " times to get to the highest amount.")
    }

    //console.log("I got " + rollTotal+ " this time.", "I have " + gameMoney+ "$ left.", "I have rolled " + rollCount + " times.", "My biggest win at night is " + highestAmount +"$.", "I have rolled " + rollCountAtHighestAmount + " times to get to the highest amount.")

    //showing results
    document.getElementById("totalRolls").innerText = rollCount;
    document.getElementById("highestEarning").innerText = highestAmount;
    document.getElementById("rollCount").innerText = rollCountAtHighestAmount;

    document.getElementById("results").style.display = "block";
}