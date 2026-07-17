// =============================================
// 間隔反復復習: Step 1-6「filter — 条件に合う要素だけ集める」
// 完了日: 2026-07-16 / 復習回数: 1回目
// =============================================

// =============================================
// 復習問題: 基準以上の気温を華氏へ変換する
// =============================================

// 摂氏の気温の配列と基準値を受け取り、
// 基準値以上の気温だけを選び、それぞれを華氏へ変換した配列を返してください。
// 華氏への変換式は「摂氏 × 9 / 5 + 32」です。
// 元の配列は変更しないでください。

function convertWarmTemperatures(temperatures, minimum) {
  // TODO: ここに実装を書いてください
    return temperatures.filter((tmp) => tmp >= minimum).map((t) => t * 9 / 5 + 32);
}

// --- テスト ---
console.assert(
  JSON.stringify(convertWarmTemperatures([10, 20, 5, 30], 15)) ===
    JSON.stringify([68, 86]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(convertWarmTemperatures([0, 10, 20], 0)) ===
    JSON.stringify([32, 50, 68]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(convertWarmTemperatures([-10, -5], 0)) ===
    JSON.stringify([]),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(convertWarmTemperatures([], 10)) ===
    JSON.stringify([]),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
