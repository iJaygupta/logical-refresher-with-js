class GFG {

    printKMax = (arr, n, k) => {
        let j, max;

        for (let i = 0; i <= n - k; i++) {

            max = arr[i];

            for (j = 1; j < k; j++) {
                if (arr[i + j] > max)
                    max = arr[i + j];
            }
            console.log(max)
        }
    }

    // Driver code
    main = () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let k = 3;
        this.printKMax(arr, arr.length, k);
    }
}

let obj = new GFG();
obj.main()
