// use a hashtable to filter out duplicate items

// define a set of items that we want to reduce duplicates
const items = ["apple", "pear", "orange", "banana", "apple",
    "orange", "apple", "pear", "banana", "orange",
    "apple", "kiwi", "pear", "apple", "orange"];

// create a hashtable to perform a filter
const filter = {};

// loop over each item and add to the hashtable
for(const i of items) {
    filter[i] = 0;
}

// create a set from the resulting keys in the hashtable
const result = new Set(Object.keys(filter));

console.log(filter);
console.log(result);