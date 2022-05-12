const items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87];

function binarysearch(item, itemlist) {
    // get the list size
    const listsize = itemlist.length - 1;

    // start at two ends of the list
    let lowerIdx = 0;
    let upperIdx = listsize;

    while (lowerIdx <= upperIdx) {
        // calculate the middle point
        const midPt = Math.floor((lowerIdx + upperIdx) / 2);

        // if item is found, return the index
        if (itemlist[midPt] === item) {
            return midPt;
        }

        // otherwise get the next midpoint
        if (item > itemlist[midPt]) {
            lowerIdx = midPt + 1;
        } else {
            upperIdx = midPt - 1;
        }
    }

    if (lowerIdx > upperIdx) {
        return undefined;
    }
}

console.log(binarysearch(23, items));
console.log(binarysearch(87, items));
console.log(binarysearch(250, items));