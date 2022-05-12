function countdown(x) {
    if (x === 0) {
        console.log("Done!");
        return;
    } else {
        console.log(x, "...");
        countdown(x -1);
        console.log("foo"); // this one is called after a stack is empty - functions countdown are called
    }
}

function power(num, pwr) {
    if (pwr === 0) {
        return 1;
    } else {
        return num * power(num, pwr - 1);
    }
}

// 0! = 1
// 5! = 5x4x3x2x1 - 120
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

countdown(5);
console.log("power 5, 3: ", power(5, 3));
console.log("factorial 5: ", factorial(5));