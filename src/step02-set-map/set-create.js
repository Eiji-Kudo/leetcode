// =============================================
// Step 2-1: Set の作成と基本操作
// =============================================

// =============================================
// 問題: 初期タグの配列、新しく追加するタグの配列、
// 確認したいタグを受け取り、次の情報を返してください。
//
// - すべてのタグを重複なしで管理したときの個数
// - 確認したいタグが含まれているかどうか
//
// 返り値の形式:
// { size: 3, hasTarget: true }
// =============================================

function summarizeTags(initialTags, newTags, targetTag) {
  // TODO: ここに実装を書いてください
    const init = new Set(initialTags);
    const newTagsSet = new Set(newTags);
    const total = init.union(newTagsSet);

    const ans = { size: total.size, hasTarget: total.has(targetTag)};
    
    return ans;
}

// --- テスト ---
console.assert(
  JSON.stringify(summarizeTags(
    ["news", "tech", "news"],
    ["music", "tech"],
    "music",
  )) === JSON.stringify({ size: 3, hasTarget: true }),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(summarizeTags(["a", "b"], ["c", "d"], "x")) ===
    JSON.stringify({ size: 4, hasTarget: false }),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(summarizeTags([], ["same", "same"], "same")) ===
    JSON.stringify({ size: 1, hasTarget: true }),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(summarizeTags([], [], "anything")) ===
    JSON.stringify({ size: 0, hasTarget: false }),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
