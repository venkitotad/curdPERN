let cal = 0;

function fibonacci(n){
    cal++;
    if(n < 2){
        return 0;
    }
    
    return fibonacci(n -1 ) + fibonacci(n-2);
}


function fibonacciMaster(){
    let cache = {};
    
    return function fib(n){
        if(n in cache){
            return cache[n];
        }else{
            if(n < 2){
                return n;
            }else{
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}
const  fb = fibonacciMaster(10)
console.log(fb)