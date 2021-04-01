
class BinarySearch {
    main(inputArray, key) {
        let i = 0;
        let j = inputArray.length - 1;
        while (i <= j) {
            let mid = (i + j) / 2;
            if (inputArray[mid] == key) {
                console.log("Element Found at", mid);
                return;
            }
            if (inputArray[mid] < key) {
                i = mid + 1;
            } else if (inputArray[mid] > key) {
                j = mid - 1;
            }
        }
        console.log("Element Not Found");
    }
}

let bs = new BinarySearch();
let dragonArray = [45, 76, 79, 112, 443, 653, 897];
bs.main(dragonArray, 7697);