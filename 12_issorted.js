const items1 = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87];
const items2 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

function is_sorted(itemlist) {
    // using the brute force method
    return itemlist.every((v, i) => i < itemlist.length - 1 ? v < itemlist[i+1] : true);
    // for(const i of itemlist) {
    //     if (itemlist[i] > itemlist[i+1]) {
    //         return false;
    //     }
    //
    // }
    // return true;
}

console.log(is_sorted(items1));
console.log(is_sorted(items2));