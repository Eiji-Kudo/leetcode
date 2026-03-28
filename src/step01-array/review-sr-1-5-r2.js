// =============================================
// 間隔反復復習: Step 1-5「map — 各要素を変換して新しい配列を返す」
// 完了日: 2026-03-08 / 復習回数: 2回目
// =============================================

// 元のステップで学んだ概念:
// - map() で配列の各要素を変換し、新しい配列を返す

// =============================================
// 復習問題: 数値の配列を受け取り、各要素を2乗した
//          新しい配列を返す関数を作ってください。
//          例: [2, 3, 5] → [4, 9, 25]
// =============================================

function squareAll(nums) {
    // TODO: ここに実装を書いてください
    return nums.map((num) => num ** 2)
}

// --- テスト ---
console.assert(JSON.stringify(squareAll([2, 3, 5])) === JSON.stringify([4, 9, 25]), "テスト1 失敗");
console.assert(JSON.stringify(squareAll([0, 1, 10])) === JSON.stringify([0, 1, 100]), "テスト2 失敗");
console.assert(JSON.stringify(squareAll([-3, -2, 4])) === JSON.stringify([9, 4, 16]), "テスト3 失敗");
console.assert(JSON.stringify(squareAll([])) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
