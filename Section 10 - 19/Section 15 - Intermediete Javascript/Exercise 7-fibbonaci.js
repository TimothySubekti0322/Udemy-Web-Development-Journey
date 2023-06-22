function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var fibonacciArray = [];

        for(var i = 0 ; i < n ; i++)
        {
            
            if(i === 0)
            {
                fibonacciArray.push(0);
            }
            else if(i === 1)
            {
                fibonacciArray.push(1);
            }
            else
            {
                var elements = fibonacciArray[i-2] + fibonacciArray[i-1];
                fibonacciArray.push(elements);
            }
        }
        
        return fibonacciArray;
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
}
    
console.log(fibonacciGenerator(6));