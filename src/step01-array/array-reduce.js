// =============================================
// Step 1-7: reduce — 配列を1つの値にまとめる
// =============================================

// =============================================
// 問題: 商品の価格配列と送料を受け取り、
// 商品価格の合計に送料を加えた合計金額を返してください。
// 商品価格の配列が空の場合は、送料だけを返します。
//
// 例: calculateTotal([120, 300, 80], 500) => 1000
// =============================================

function calculateTotal(prices, shippingFee) {
  // TODO: ここに実装を書いてください
    return prices.reduce((totalFee, price) => totalFee + price, shippingFee)
}

// --- テスト ---
console.assert(calculateTotal([120, 300, 80], 500) === 1000, "テスト1 失敗");
console.assert(calculateTotal([1000], 0) === 1000, "テスト2 失敗");
console.assert(calculateTotal([], 350) === 350, "テスト3 失敗");
console.assert(calculateTotal([0, 250, 50], 100) === 400, "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
