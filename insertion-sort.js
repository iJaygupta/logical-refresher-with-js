
class InsertionSort {
    sort(arr) {
        let n = arr.length;
        for (let i = 1; i < n; ++i) {
            let key = arr[i];
            let j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
}

let arr = [12, 11, 13, 5, 6];
let ob = new InsertionSort();
ob.sort(arr);
console.log(arr);