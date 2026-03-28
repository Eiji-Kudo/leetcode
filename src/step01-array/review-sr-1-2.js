// =============================================
// 間隔反復復習: Step 1-2「配列の追加・削除」
// 完了日: 2026-03-08 / 復習回数: 2回目
// =============================================

// 元のステップで学んだ概念:
// - push(値): 末尾に追加
// - pop(): 末尾を削除
// - unshift(値): 先頭に追加
// - shift(): 先頭を削除
// - これらは全て破壊的操作（元の配列を変更する）

// =============================================
// 復習問題: 配列の右回転
//
// 配列 arr を右に n 回回転させた結果を返してください。
// 「右に1回回転」とは、末尾の要素を先頭に移動することです。
//
// push, pop, unshift, shift を使って実装してください。
//
// 例: rotateRight([1, 2, 3, 4, 5], 2)
//     1回目: [5, 1, 2, 3, 4]（末尾の5を先頭に）
//     2回目: [4, 5, 1, 2, 3]（末尾の4を先頭に）
//     → [4, 5, 1, 2, 3]
// =============================================

function rotateRight(arr, n) {
  // TODO: ここに実装を書いてください
    //
    const times = arr.length === 0 ? 0 : n % arr.length;
    for (let i = 0; i < times; i++) {
        arr.unshift(arr.pop());
    }

    return arr;
    
}

// --- テスト ---
console.assert(JSON.stringify(rotateRight([1, 2, 3, 4, 5], 2)) === JSON.stringify([4, 5, 1, 2, 3]), "テスト1 失敗");
console.assert(JSON.stringify(rotateRight(["a", "b", "c"], 1)) === JSON.stringify(["c", "a", "b"]), "テスト2 失敗");
console.assert(JSON.stringify(rotateRight([10, 20, 30], 0)) === JSON.stringify([10, 20, 30]), "テスト3 失敗");
console.assert(JSON.stringify(rotateRight([1, 2], 3)) === JSON.stringify([2, 1]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
