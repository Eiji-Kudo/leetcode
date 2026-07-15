// =============================================
// 間隔反復復習: Step 1-5「map — 各要素を変換して新しい配列を返す」
// 完了日: 2026-03-08 / 復習回数: 3回目
// =============================================

// =============================================
// 復習問題: 商品情報の配列を表示用の文字列配列に変換する
// =============================================

// 商品オブジェクトの配列を受け取り、各商品を
// 「商品名: 価格円」という形式の文字列にした配列を返してください。
// 元の配列や商品オブジェクトは変更しないでください。
//
// 例:
// formatProducts([
//   { name: "りんご", price: 120 },
//   { name: "バナナ", price: 98 }
// ])
// => ["りんご: 120円", "バナナ: 98円"]

function formatProducts(products) {
  // TODO: ここに実装を書いてください
    //
    return products.map((product) => {
        return product.name + ": " + product.price + "円";
    })
}

// --- テスト ---
console.assert(
  JSON.stringify(formatProducts([
    { name: "りんご", price: 120 },
    { name: "バナナ", price: 98 },
  ])) === JSON.stringify(["りんご: 120円", "バナナ: 98円"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(formatProducts([{ name: "ノート", price: 250 }])) === JSON.stringify(["ノート: 250円"]),
  "テスト2 失敗",
);
console.assert(JSON.stringify(formatProducts([])) === JSON.stringify([]), "テスト3 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
