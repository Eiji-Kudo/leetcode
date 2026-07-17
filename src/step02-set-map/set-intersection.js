// =============================================
// Step 2-4: Set で共通要素を抽出
// =============================================

// =============================================
// 問題: 2つの数値配列を受け取り、
// 両方の配列に含まれる値を重複なしで返してください。
// 結果は first の配列に登場した順番で返してください。
// =============================================

function findCommonElements(first, second) {
  // TODO: ここに実装を書いてください
    const f = new Set(first);
    const s = new Set(second);

    const common = f.intersection(s);
    const a = [...f].filter((e) => common.has(e));
    return a;
}

// --- テスト ---
console.assert(
  JSON.stringify(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])) ===
    JSON.stringify([3, 4]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(findCommonElements([1, 2, 2, 3], [2, 2, 4])) ===
    JSON.stringify([2]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(findCommonElements([5, 6], [1, 2])) === JSON.stringify([]),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(findCommonElements([], [1, 2])) === JSON.stringify([]),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
