var array = [];

for(let count = 1 ; count <= 100 ; count++)
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
}

console.log(array);