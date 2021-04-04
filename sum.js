class TargetEqualTwoElementSum {

    main(arr, target) {
        let size = arr.length;
        let obj = {};
        for (let i = 0; i < size; i++) {
            obj[arr[i]] = i;
        }
        for (let i = 0; i < size; i++) {
            if (obj[target - arr[i]] && obj[target - arr[i]] != i) {
                return [i, obj[target - arr[i]]]
            }
        }
        return `No Possible Solution`;
    }
}

let trigger = new TargetEqualTwoElementSum();
let result = trigger.main([2, 7, 9, 6, 10, -4, 11, 4], 4)
console.log(result);