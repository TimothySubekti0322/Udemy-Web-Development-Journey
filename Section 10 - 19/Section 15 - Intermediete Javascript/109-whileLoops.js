var count = 1;
var array = [];

while(count <= 100)
{
    if(count % 3 == 0)
    {
        if(count % 5 == 0)
        {
            array.push("FizzBuzz");
        }
        else
        {
            array.push("Fizz");
        }
    }
    else if(count % 5 == 0)
    {
        array.push("Buzz");
    }
    else
    {
        array.push(count);
    }
    count++;
}

console.log(array);