// =============================================
// 間隔反復復習: Step 1-2「配列の追加・削除」
// 完了日: 2026-03-08 / 復習回数: 4回目
// =============================================

// =============================================
// 復習問題: プレイリストの編集
// =============================================

// 曲名の配列と編集操作の配列を受け取り、操作を順番に適用した
// 最終的なプレイリストを返してください。
// 元の曲名の配列は変更しないでください。
//
// 操作の形式:
// - { type: "addFirst", song: "曲名" } : 先頭に追加
// - { type: "addLast", song: "曲名" }  : 末尾に追加
// - { type: "removeFirst" }             : 先頭を削除
// - { type: "removeLast" }              : 末尾を削除
//
// 配列が空のときに削除操作が来た場合は何もしません。

function editPlaylist(songs, operations) {
  // TODO: ここに実装を書いてください
    operations.forEach((operation) => {
        switch(operation.type) {
            case "addFirst":
                songs.unshift(operation.song);
                break;
            case "addLast":
                songs.push(operation.song);
                break;
            case "removeFirst":
                songs.shift();
                break;
            case "removeLast":
                songs.pop();
                break;
        } 
    })

    return songs
}

// --- テスト ---
console.assert(
  JSON.stringify(editPlaylist(
    ["A", "B"],
    [
      { type: "addFirst", song: "X" },
      { type: "removeLast" },
      { type: "addLast", song: "C" },
    ],
  )) === JSON.stringify(["X", "A", "C"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(editPlaylist(
    [],
    [{ type: "removeFirst" }, { type: "addLast", song: "A" }, { type: "addFirst", song: "B" }],
  )) === JSON.stringify(["B", "A"]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(editPlaylist(
    ["A", "B", "C"],
    [{ type: "removeFirst" }, { type: "removeLast" }],
  )) === JSON.stringify(["B"]),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(editPlaylist(["A"], [])) === JSON.stringify(["A"]),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
