var wins = 0;
var losses = 0;
var totalScore = 0;
var goalScore = Math.floor(Math.random() * 102) +19;
var button1 = Math.floor(Math.random() * 12) +1;
var button2 = Math.floor(Math.random() * 12) +1;
var button3 = Math.floor(Math.random() * 12) +1;
var button4 = Math.floor(Math.random() * 12) +1;
$("#goal").html(goalScore);

//Reset the game
function reset(event) {
    totalScore = 0;
    goalScore = Math.floor(Math.random() * 102) +19;
    button1 = Math.floor(Math.random() * 12) +1;
    button2 = Math.floor(Math.random() * 12) +1;
    button3 = Math.floor(Math.random() * 12) +1;
    button4 = Math.floor(Math.random() * 12) +1;
    $("#goal").html(goalScore);
    $("#score").html(totalScore);
}

//Click button1, add to total score, check for wins/losses and reset accordingly
$("#jewel1").on("click", function() {
    var secondNumber = (totalScore + button1);
    totalScore = secondNumber;
    $("#score").html(totalScore);
    if (totalScore === goalScore) {
        wins++
        $("#wins").html("Wins: " + wins)
        reset();
    } else if (totalScore > goalScore) {
        losses++
        $("#losses").html("Losses: " + losses)
        reset();
    }  
});

//Click button2, add to total score, check for wins/losses and reset accordingly
$("#jewel2").on("click", function() {
    var secondNumber = (totalScore + button2);
    totalScore = secondNumber;
    $("#score").html(totalScore);
    if (totalScore === goalScore) {
        wins++
        $("#wins").html("Wins: " + wins)
        reset();
    } else if (totalScore > goalScore) {
        losses++
        $("#losses").html("Losses: " + losses)
        reset();
    } 
});

//Click button3, add to total score, check for wins/losses and reset accordingly
$("#jewel3").on("click", function() {
    var secondNumber = (totalScore + button3);
    totalScore = secondNumber;
    $("#score").html(totalScore);
    if (totalScore === goalScore) {
        wins++
        $("#wins").html("Wins: " + wins)
        reset();
    } else if (totalScore > goalScore) {
        losses++
        $("#losses").html("Losses: " + losses)
        reset();
    } 
});

//Click button4, add to total score, check for wins/losses and reset accordingly
$("#jewel4").on("click", function() {
    var secondNumber = (totalScore + button4);
    totalScore = secondNumber;
    $("#score").html(totalScore);
    if (totalScore === goalScore) {
        wins++
        $("#wins").html("Wins: " + wins)
        reset();
    } else if (totalScore > goalScore) {
        losses++
        $("#losses").html("Losses: " + losses)
        reset();
    } 
});



