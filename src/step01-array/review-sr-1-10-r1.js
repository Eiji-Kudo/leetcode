// =============================================
// 間隔反復復習: Step 1-10「再生リストの並び替え」
// 完了日: 2026-07-17 / 復習回数: 1回目
// =============================================

// =============================================
// 復習問題: 再生順を入れ替える
// =============================================

// 曲名の配列を受け取り、最後の曲から最初の曲へ並ぶ
// 新しい配列を返してください。
// 元の配列は変更しないでください。

function reorderPlaylist(songs) {
  // TODO: ここに実装を書いてください
    const ans = [...songs].reverse(); 
    return ans;
}

// --- テスト ---
console.assert(
  JSON.stringify(reorderPlaylist(["intro", "verse", "chorus"])) ===
    JSON.stringify(["chorus", "verse", "intro"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(reorderPlaylist(["only-song"])) === JSON.stringify(["only-song"]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(reorderPlaylist(["a", "b", "a"])) === JSON.stringify(["a", "b", "a"]),
  "テスト3 失敗",
);
console.assert(JSON.stringify(reorderPlaylist([])) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
