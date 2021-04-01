class LinearSearch {
    search(arr, x) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            if (arr[i] == x)
                return i;
        }
        return -1;
    }
}

let arr = [2, 3, 4, 10, 40];
let x = 10;

let s = new LinearSearch();
let result = s.search(arr, x);
if (result == -1)
    console.log("Element is not present in array");
else
    console.log("Element is present at index " + result);