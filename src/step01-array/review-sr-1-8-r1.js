// =============================================
// 間隔反復復習: Step 1-8「商品コードの検索」
// 完了日: 2026-07-16 / 復習回数: 1回目
// =============================================

// =============================================
// 復習問題: 商品コードの検索
// =============================================

// 商品コードの配列と探したいコードを受け取り、
// コードが登録されているかどうかと、最初に登場する位置を返してください。
// 登録されていない場合、位置は -1 にしてください。
//
// 返り値の形式:
// { registered: true, position: 2 }

function findProductCode(codes, targetCode) {
  // TODO: ここに実装を書いてください
    return {registered: codes.includes(targetCode), position: codes.indexOf(targetCode)} 
}

// --- テスト ---
console.assert(
  JSON.stringify(findProductCode(["A-10", "B-20", "C-30"], "C-30")) ===
    JSON.stringify({ registered: true, position: 2 }),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(findProductCode(["A-10", "B-20"], "X-99")) ===
    JSON.stringify({ registered: false, position: -1 }),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(findProductCode(["A-10", "B-20", "A-10"], "A-10")) ===
    JSON.stringify({ registered: true, position: 0 }),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(findProductCode([], "A-10")) ===
    JSON.stringify({ registered: false, position: -1 }),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
