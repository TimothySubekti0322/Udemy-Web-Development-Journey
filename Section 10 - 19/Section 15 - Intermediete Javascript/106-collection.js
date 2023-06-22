var primeList = [2,3,5,7];
var number = Math.floor(Math.random()*10) + 1;
console.log('Number is : ' + number);
if(primeList.includes(number)) {
    console.log('Number is prime');
}
else {
    console.log('Number is not prime');
}