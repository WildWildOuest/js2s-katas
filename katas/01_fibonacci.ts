/** 
https://en.wikipedia.org/wiki/Fibonacci_number
*/


/** 
JS
*/

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}


/** 
TS
*/

const fibonacci_ts = (num: number):number => {
  let a:number = 1;
  let b:number = 0;
  let temp:number;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;

}

const fibonacci_ts_recursive = (num: number) => {
  if (num <= 1) return 1;
  return fibonacci_ts_recursive(num - 1) + fibonacci_ts_recursive(num - 2);
}

const fibonacci_ts_recursive_memoization = (num: number, cache:Map<number,number> = new Map<number,number>()) => {
  if (num <= 1) return 1;
  if(!cache.has(num-1)) cache.set(num-1, fibonacci_ts_recursive_memoization(num - 1, cache));
  if(!cache.has(num-2)) cache.set(num-2, fibonacci_ts_recursive_memoization(num - 2, cache));
  return cache.get(num-1) + cache.get(num-2);
}
