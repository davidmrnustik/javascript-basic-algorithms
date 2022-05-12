// using a hastable to count individual items

// define a set of items that we want to reduce duplicates
const items = ["apple", "pear", "orange", "banana", "apple",
    "orange", "apple", "pear", "banana", "orange",
    "apple", "kiwi", "pear", "apple", "orange"];

// create a hashtable object to hold the items and counts
const counter = {};

// iterate over each item and increment the count for each one
for(const item of items) {
    if (Object.keys(counter).includes(item)) {
        counter[item] += 1;
    } else {
        counter[item] = 1;
    }
}

console.log(counter);
