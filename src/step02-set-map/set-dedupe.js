// =============================================
// Step 2-3: Set で重複除去
// =============================================

// =============================================
// 問題: ユーザー名の配列を受け取り、重複を除去した新しい配列を返してください。
// 最初に登場した順番は保持してください。
// 元の配列は変更しないでください。
// =============================================

function removeDuplicateNames(names) {
  // TODO: ここに実装を書いてください
    return [... new Set(names)];
}

// --- テスト ---
console.assert(
  JSON.stringify(removeDuplicateNames(["alice", "bob", "alice", "carol"])) ===
    JSON.stringify(["alice", "bob", "carol"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(removeDuplicateNames(["x", "x", "x"])) === JSON.stringify(["x"]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(removeDuplicateNames(["a", "b", "c"])) === JSON.stringify(["a", "b", "c"]),
  "テスト3 失敗",
);
console.assert(JSON.stringify(removeDuplicateNames([])) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
