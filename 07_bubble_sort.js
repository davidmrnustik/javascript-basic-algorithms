function bubbleSort(dataset) {
    for(let i = dataset.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (dataset[j] > dataset[j+1]) {
                const temp = dataset[j];
                dataset[j] = dataset[j+1];
                dataset[j+1] = temp;
            }
        }
        console.log("Current state: ", dataset);
    }
}

function main() {
    const list1 = [6, 20, 8, 18, 56, 23, 87, 41, 49, 53];
    bubbleSort(list1);
    console.log("Result: ", list1);
}

main();