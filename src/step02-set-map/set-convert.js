// =============================================
// Step 2-2: Set の削除と変換
// =============================================

// =============================================
// 問題: タグの配列、削除したいタグ、すべて削除するかどうかを受け取り、
// 操作後のタグを配列として返してください。
//
// removeAll が false の場合は指定されたタグだけを削除し、
// true の場合はすべてのタグを削除してください。
// 同じタグが複数ある場合は、1つにまとめてください。
// タグの順番は保持してください。
// =============================================

function removeTags(tags, targetTag, removeAll) {
  // TODO: ここに実装を書いてください
    //
    const tSet = new Set(tags);
    tSet.delete(targetTag);
    if (removeAll) tSet.clear();
    
    return [...tSet];
}

// --- テスト ---
console.assert(
  JSON.stringify(removeTags(["news", "tech", "music"], "tech", false)) ===
    JSON.stringify(["news", "music"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(removeTags(["a", "b", "c"], "x", false)) ===
    JSON.stringify(["a", "b", "c"]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(removeTags(["news", "news", "tech"], "tech", false)) ===
    JSON.stringify(["news"]),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(removeTags(["news", "tech"], "news", true)) ===
    JSON.stringify([]),
  "テスト4 失敗",
);
console.assert(
  JSON.stringify(removeTags([], "anything", false)) === JSON.stringify([]),
  "テスト5 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
