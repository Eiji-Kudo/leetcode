// =============================================
// Step 1-10: 練習 — 配列を逆順にする
// =============================================

// =============================================
// 問題: 配列を受け取り、要素の順番を逆にした新しい配列を返してください。
// 元の配列は変更しないでください。
// =============================================

function reverseArray(items) {
  // TODO: ここに実装を書いてください
    return items.toReversed();
}

// --- テスト ---
console.assert(
  JSON.stringify(reverseArray([1, 2, 3, 4])) === JSON.stringify([4, 3, 2, 1]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(reverseArray(["a", "b", "c"])) === JSON.stringify(["c", "b", "a"]),
  "テスト2 失敗",
);
console.assert(JSON.stringify(reverseArray([42])) === JSON.stringify([42]), "テスト3 失敗");
console.assert(JSON.stringify(reverseArray([])) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
