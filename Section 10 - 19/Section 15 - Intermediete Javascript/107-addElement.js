var output = [];
var count = 0;

function fizzBuzz() {
    count++
    if(count % 3 == 0) {
        if(count % 5 == 0) {
            output.push("FizzBuzz");
        }
        else {
            output.push("Fizz");
        }
    }
    else if(count % 5 == 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    console.log(output);
}

for(let i = 0 ; i < 15 ; i++) {
    fizzBuzz();
}