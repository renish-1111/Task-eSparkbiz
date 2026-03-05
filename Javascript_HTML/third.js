console.log(typeof(Number("123")));

function fibo(term){
    if (term < 3){
        return 1
    }
    else{
        return fibo(term-1)+fibo(term-2)
    }
}

result = fibo(10)
console.log(result)