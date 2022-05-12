// use a recursive algorithm to find a maximum value

// declare a list of values to operate on
items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

function find_max(items) {
    // version with reduce
    // return items.reduce((cur, acc) => {
    //     if (cur > acc) {
    //         acc = cur;
    //     }
    //     return acc;
    // }, items[0])

    // breaking condition: last item in list? return it
    if (items.length === 1) {
        return items[0];
    }

    // otherwise get the first item and call function
    // again to operate on the rest of the list
    const op1 = items[0];
    console.log(op1);
    const op2 = find_max(items.slice(1));
    console.log(op2);

    // perform the comparison when we're down to just two
    if (op1 > op2) {
        return op1;
    } else {
        return op2;
    }
}

console.log(find_max(items));
