const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

function mergesort(dataset) {
    if (dataset.length > 1) {
        const mid = Math.floor(dataset.length / 2);

        // break array to parts
        const leftarr = dataset.slice(0, mid);
        const rightarr = dataset.slice(mid);

        // recursively break down the arrays
        mergesort(leftarr);
        mergesort(rightarr);

        // perform the merging
        // i: index into the left array
        let i = 0;
        // j: index into the right array
        let j = 0;
        // index into merged array
        let k = 0;

        // while both arrays have content
        while (i < leftarr.length && j < rightarr.length) {
            if (leftarr[i] < rightarr[j]) {
                dataset[k] = leftarr[i];
                i++;
            } else {
                dataset[k] = rightarr[j];
                j++;
            }
            k++;
        }

        // if the left array still has values, add them
        while (i < leftarr.length) {
            dataset[k] = leftarr[i];
            i++;
            k++;
        }

        // if the right array still has values, add them
        while (j < rightarr.length) {
            dataset[k] = rightarr[j];
            j++;
            k++;
        }
    }
}

console.log(items);
mergesort(items);
console.log(items);