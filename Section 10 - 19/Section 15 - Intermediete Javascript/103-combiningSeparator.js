var loveScore = Math.floor(Math.random()*100)+1;

if (loveScore >= 0 && loveScore <= 30) {
    console.log("Love Score : " + loveScore);
    console.log("Your love score is bad");
}
else if (loveScore > 30 && loveScore <= 70) {
    console.log("Love Score : " + loveScore);
    console.log("Your love score is quite good");
}
else if (loveScore > 70 && loveScore <= 100) {
    console.log("Love Score : " + loveScore);
    console.log("Your love score is very good");
}
else {
    console.log('Undefined Love Score');
}
