// Initiate Level
var level = 0;

// Initiate array Color
var colorArray = ["green" , "red" , "yellow" , "blue"];

// Initiate array of Color Order
var colorOrder = [];

// Initiate first index
var index = 0;
    
// Initiate Match Color
var matchColor = "";

// Initiate GameStart
var gameStart = false;

var btnPress = "";

$(document).on("keypress", function() {
    if(!gameStart)
    {
        nextLevel();
        gameStart = true;
    }
    
})


// Button Listening
$(".btn").on("click",function() {
    if(gameStart)
    {
        // Button Pressed Animation
        btnPress = $(this).attr("id");
        btnPressed(btnPress);

        // Right Answer
        if($(this).hasClass(matchColor))
        {
            // Index Increment
            index++;
            
            // sequence is over
            if(index == colorOrder.length)
            {

                // Give Delay
                setTimeout(function() {}, 2000);

                // you did it, go to next level
                nextLevel();
            }

            // sequence isn't over
            else
            {
                matchColor = colorOrder[index];
            }
        }

        // Wrong Answer
        else
        {
            flashBackground();
            wrongAnswerSound();
            $("#level-title").text("Game Over, Press Any Key to Restart");

            // Restart the Game
            restart();

            // game become not started
            gameStart = false;

        }
    }
});

// Fungsi Animate button Pressed
function btnPressed(color) {
    $("#" + color).toggleClass("pressed");
    setTimeout(function(){
        $("#" + color).toggleClass("pressed");
    }, 100);

}


// Fungsi untuk naik Level
function nextLevel() {
    
    // Upgrade Level
    level++;

    // Reset Index
    index = 0;

    // Genereate Random Color
    let indexRN = randomNumber();
    let color = colorArray[indexRN];
    
    // Add Color to colorOrder
    colorOrder.push(color);
    
    // generate sound and blink
    soundOn(color);
    blink(color);
    
    // Set match
    matchColor = colorOrder[index];

    // Change the title
    $("#level-title").text("level " + level);
}

// Fungsi untuk me-restart game
function restart() {
    level = 0;
    colorOrder = [];
    index = 0;
    matchColor = "";
}


// Fungsi Membunyikan Audio berdasarkan warna
function soundOn(color) {
    let audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

// Fungsi Blink button
function blink(color) {
    $("." + color).animate({opacity:0}).animate({opacity:1});
}

// Fungsi Menghasilkan Angka Random
function randomNumber() {
    return Math.floor(Math.random()*4);
}

// Fungsi Flash background waktu salah mencet
function flashBackground() {
    $("body").toggleClass("game-over");
    setTimeout(function(){
        $("body").toggleClass("game-over");
    }, 200);
}

// Fungsi play audio Wrong Answer
function wrongAnswerSound() {
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
}