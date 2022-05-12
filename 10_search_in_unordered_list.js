const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

function find_item(item, itemlist) {
    for(let [i, v] of itemlist.entries()) {
        if (item === v) {
            return i;
        }
    }
    return undefined;
}

console.log(find_item(87, items));
console.log(find_item(250, items));