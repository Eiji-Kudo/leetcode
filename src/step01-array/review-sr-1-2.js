// =============================================
// 間隔反復復習: Step 1-2「配列の追加・削除」
// 完了日: 2026-03-08 / 復習回数: 1回目
// =============================================

// 元のステップで学んだ概念:
// - push(値): 末尾に追加
// - pop(): 末尾を削除
// - unshift(値): 先頭に追加
// - shift(): 先頭を削除
// - これらは全て破壊的操作（元の配列を変更する）

// =============================================
// 復習問題: スタック操作のシミュレーション
//
// 「スタック」は後入れ先出し（LIFO）のデータ構造です。
// 命令リスト(commands)を受け取り、順番に実行した結果の配列を返してください。
//
// 命令の形式:
//   ["push", 値]  → 末尾に値を追加
//   ["pop"]       → 末尾から値を削除
//   ["unshift", 値] → 先頭に値を追加
//   ["shift"]     → 先頭から値を削除
//
// 例: runCommands([["push", 1], ["push", 2], ["pop"], ["unshift", 5]])
//     → [5, 1]
//     （1追加→[1], 2追加→[1,2], 末尾削除→[1], 先頭に5追加→[5,1]）
// =============================================

function runCommands(commands) {
  // TODO: ここに実装を書いてください

  let ans = [];

  for (const [command, value] of commands) {
    switch (command) {
          case "push":
            ans.push(value);
            break;
          case "pop":
            ans.pop()
            break;
          case "unshift":
            ans.unshift(value)
            break;
          case "shift":
            ans.shift()
            break;
        }
      
  }

  return ans;

}

// --- テスト ---
console.assert(JSON.stringify(runCommands([["push", 1], ["push", 2], ["pop"], ["unshift", 5]])) === JSON.stringify([5, 1]), "テスト1 失敗");
console.assert(JSON.stringify(runCommands([["push", "a"], ["push", "b"], ["push", "c"], ["shift"], ["shift"]])) === JSON.stringify(["c"]), "テスト2 失敗");
console.assert(JSON.stringify(runCommands([["unshift", 10], ["unshift", 20], ["pop"], ["push", 30]])) === JSON.stringify([20, 30]), "テスト3 失敗");
console.assert(JSON.stringify(runCommands([["push", 1], ["pop"]])) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
