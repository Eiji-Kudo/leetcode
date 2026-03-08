// =============================================
// Step 1-6: filter — 条件に合う要素だけ集める
// =============================================

// =============================================
// 問題: 数値の配列と閾値(threshold)を受け取り、
// 閾値より大きい数値だけを集めた配列を返し、
// さらにそれぞれを2倍にして返す関数を作ってください。
// (filter と map を組み合わせて使う)
//
// 例: filterAndDouble([1, 5, 3, 8, 2], 3) => [10, 16]
//   → 3より大きい [5, 8] を2倍にして [10, 16]
// =============================================

function filterAndDouble(nums, threshold) {
  // TODO: ここに実装を書いてください
  const ans = nums.filter((num) => num > threshold).map((i) => i * 2)
  return ans
}

// --- テスト ---
console.assert(JSON.stringify(filterAndDouble([1, 5, 3, 8, 2], 3)) === JSON.stringify([10, 16]), "テスト1 失敗");
console.assert(JSON.stringify(filterAndDouble([10, 20, 30], 15)) === JSON.stringify([40, 60]), "テスト2 失敗");
console.assert(JSON.stringify(filterAndDouble([1, 2, 3], 5)) === JSON.stringify([]), "テスト3 失敗");
console.assert(JSON.stringify(filterAndDouble([], 0)) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
