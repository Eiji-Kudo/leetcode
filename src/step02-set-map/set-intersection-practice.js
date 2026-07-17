// =============================================
// Step 2-4 追加練習: 共通するタグ
// =============================================

// =============================================
// 問題: 2人のユーザーが登録しているタグの配列を受け取り、
// 両方に登録されているタグを重複なしで返してください。
// 結果は userTags の登場順で返してください。
// =============================================

function findSharedTags(userTags, otherTags) {
  // TODO: ここに実装を書いてください
    
    const userSet = new Set(userTags);
    const otherSet = new Set(otherTags);

    const common = userSet.intersection(otherSet);

    return [...userSet].filter((value) => common.has(value));
}

// --- テスト ---
console.assert(
  JSON.stringify(findSharedTags(
    ["javascript", "web", "database"],
    ["database", "cloud", "web"],
  )) === JSON.stringify(["web", "database"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(findSharedTags(["a", "b", "a", "c"], ["c", "a", "c"])) ===
    JSON.stringify(["a", "c"]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(findSharedTags(["red", "blue"], ["green"])) === JSON.stringify([]),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(findSharedTags([], ["anything"])) === JSON.stringify([]),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
