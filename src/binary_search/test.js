

// [1, 3, 5, 7, 9] のようにソート済みで並んでいる配列に対して、
// 配列内の要素をもらった時に 配列内のindexを返すようにする

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else if (guess < item) {
            low = mid + 1;
        }

    }

}

const ans = binarySearch([1, 3, 5, 7, 9], 3);
console.log(ans, ans === 1);
