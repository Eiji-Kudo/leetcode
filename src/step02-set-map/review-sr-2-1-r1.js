// =============================================
// 間隔反復復習: Step 2-1「在庫の確認」
// 完了日: 2026-07-17 / 復習回数: 1回目
// =============================================

// =============================================
// 復習問題: 入荷後の在庫を確認する
// =============================================

// 現在の商品コードの配列、入荷した商品のコードの配列、
// 探したい商品コードを受け取り、入荷後の商品種類数と、
// 探したい商品が存在するかどうかを返してください。
// 同じ商品コードは1種類として数えてください。
//
// 返り値の形式:
// { count: 4, available: true }

function inspectInventory(currentCodes, arrivedCodes, targetCode) {
  // TODO: ここに実装を書いてください
    
}

// --- テスト ---
console.assert(
  JSON.stringify(inspectInventory(
    ["A", "B", "A"],
    ["C", "B"],
    "C",
  )) === JSON.stringify({ count: 3, available: true }),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(inspectInventory(["A", "B"], ["C", "D"], "X")) ===
    JSON.stringify({ count: 4, available: false }),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(inspectInventory([], ["same", "same"], "same")) ===
    JSON.stringify({ count: 1, available: true }),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(inspectInventory([], [], "X")) ===
    JSON.stringify({ count: 0, available: false }),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
