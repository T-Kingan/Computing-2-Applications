const tutorial = Object.create(null);

// write a function that takes two numbers and adds them

// function can then be called in the loop

const sum = function (a,b){
    return a + b;
};

const factorial = function(x){
    if (x===0){
        return 1;
    }
    else{
        return x * factorial(x-1);
    }
};

// write function again as turnary?

const factorial_simp = (x) => {
    return (x === 0) ? 1 : (x * factorial_simp(x-1))
};

// turnary in conditional variable assignment

const fibonacci = function(n){
    if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    } else {
        return(fibonacci(n - 1) + fibonacci(n - 2));
    }
};
// make one that could start at any point in the sequence

const fibonacci_like = function(x, y){
    return function(n){
        if (n === 0){
            return x;
        } else if (n === 1) {
            return y;
        } else {
            return(fibonacci_like(n - 1) + fibonacci_like(n - 2));
        }
    };
}

const fibonacci_new = function(n){
    if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    } else {
        return(fibonacci(n - 1) + fibonacci(n - 2));
    }
};

if (fibonacci_like(2308, 4261)(8) === 119485){
    console.log("TRUE");
}

debugger;

// use for each instead. Empty arrays and change them as you go???