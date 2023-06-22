// Detecting button pressed
for(let i = 0 ; i < document.querySelectorAll("button").length ; i++) {
    document.querySelectorAll("button")[i].addEventListener("mousedown",function() {
        var key = this.textContent;
        checkKey(key);
        buttonAnimation(key);
    })
}

// Detecting keyboard press
document.addEventListener("keydown",function(key) {
    undoStyling(key.key)
})

// Detecting button unpressed
for(let i = 0 ; i < document.querySelectorAll("button").length ; i++) {
    document.querySelectorAll("button")[i].addEventListener("mouseup",function() {
        var key = this.textContent;
        undoStyling(key)
    })
}

// Detecting keyboard unpressed
document.addEventListener("keyup",function(key) {
    checkKey(key.key);
    buttonAnimation(key.key);
})

function checkKey(key) {
    switch(key) {
        case "w" :
            playTom1();
            break;
        case "a" :
            playTom2();
            break;
        case "s" :
            playTom3();
            break;
        case "d" :
            playTom4();
            break;
        case "j" :
            playSnare();
            break;
        case "k" :
            playCrash();
            break;
        case "l" :
            playKick();
            break;
    }
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
}

function undoStyling(key) {
    document.querySelector("." + key).classList.remove("pressed");
}

function playCrash() {
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
}
function playKick() {
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
}
function playSnare() {
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
}
function playTom1() {
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}
function playTom2() {
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
}
function playTom3() {
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
}
function playTom4() {
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
}