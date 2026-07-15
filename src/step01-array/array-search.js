// =============================================
// Step 1-8: includes / indexOf — 要素を検索する
// =============================================

// =============================================
// 問題: 配列と探したい要素を受け取り、
// その要素が含まれているかどうかと、
// 最初に見つかった位置を次の形式で返してください。
//
// { exists: true, index: 2 }
//
// 要素が含まれていない場合、index は -1 にしてください。
// =============================================

function inspectItem(items, target) {
  // TODO: ここに実装を書いてください
    const exists = items.includes(target);
    const index = items.indexOf(target);

    const ans = {exists, index}

    return ans;
    
}

// --- テスト ---
console.assert(
  JSON.stringify(inspectItem(["apple", "banana", "cherry"], "banana")) ===
    JSON.stringify({ exists: true, index: 1 }),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(inspectItem([10, 20, 30], 50)) ===
    JSON.stringify({ exists: false, index: -1 }),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(inspectItem(["a", "b", "a"], "a")) ===
    JSON.stringify({ exists: true, index: 0 }),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(inspectItem([], "anything")) ===
    JSON.stringify({ exists: false, index: -1 }),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
