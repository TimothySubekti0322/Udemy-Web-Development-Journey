var dice1 = 6;
var dice2 = 6;


document.querySelector(".roll-button").addEventListener("click", function(){
    
    // Randomize Dice Number
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    
    // Create image link
    var link1 = "";
    var link2 = "";
    link1 = "./images/dice" + dice1 + ".png"; 
    link2 = "./images/dice" + dice2 + ".png";
    
    // Change Image
    document.querySelector(".img1").setAttribute("src",link1);
    document.querySelector(".img2").setAttribute("src",link2);

    // Check the dice Value & decide the winner

    if(dice1 > dice2)
    {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }
    else if(dice2 > dice1)
    {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }
    else
    {
        document.querySelector("h1").textContent = "Draws!";
    }
})

document.querySelector(".refresh-button").addEventListener("click",function(){
    location.reload();
})