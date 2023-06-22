function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var index = Math.floor(Math.random()*names.length);
        return (names[index] + " is going to buy lunch today!");
        
        
        
    
    
    /******Don't change the code below*******/    
}

var names = ["Timothy","Marvel","Reinhart"];
console.log(whosPaying(names));