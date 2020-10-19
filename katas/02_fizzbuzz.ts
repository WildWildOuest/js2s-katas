/** 
https://en.wikipedia.org/wiki/Fizz_buzz
*/


/** 
JS
*/

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

/** 
TS
*/
const fizzBuzzToN = (max: number):string[] => {
    return Array.from({ length: max}, (_,i) => i+1).map((e) => {
        if(e % 15 === 0) return 'FizzBuzz';
        if(e % 3 === 0) return 'Fizz';
        if(e % 5 === 0) return 'Buzz';
        return e.toString();
    })  
};

