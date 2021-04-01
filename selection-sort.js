class SelectionSort {

    sort = (arr) => {
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let min_idx = i;
            for (let j = i + 1; j < n; j++)
                if (arr[j] < arr[i])
                    min_idx = j;

            let temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}

let ob = new SelectionSort();
let arr = [64, 25, 12, 22, 11];
ob.sort(arr);
console.log("Sorted array");
console.log(arr);
