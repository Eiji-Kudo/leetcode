// =============================================
// 間隔反復復習: Step 1-2「配列の追加・削除」
// 完了日: 2026-03-08 / 復習回数: 3回目
// =============================================

// 元のステップで学んだ概念:
// - push(値): 末尾に追加
// - pop(): 末尾を削除（削除した値を返す）
// - unshift(値): 先頭に追加
// - shift(): 先頭を削除（削除した値を返す）
// - これらは全て破壊的操作（元の配列を変更する）

// =============================================
// 復習問題: コマンド列の実行
//
// 配列に対するコマンド列を順に実行し、最終的な配列を返してください。
// 初期配列は空 [] です。
//
// コマンドの種類:
//   "push X"    → 末尾に値 X (数値) を追加
//   "pop"       → 末尾を削除
//   "unshift X" → 先頭に値 X (数値) を追加
//   "shift"     → 先頭を削除
//
// 配列が空のときに pop / shift が来た場合は何もしない（無視）。
//
// 例: runCommands(["push 1", "push 2", "unshift 0", "pop"])
//     - push 1    → [1]
//     - push 2    → [1, 2]
//     - unshift 0 → [0, 1, 2]
//     - pop       → [0, 1]
//     → [0, 1]
// =============================================

function runCommands(commands) {
    // TODO: ここに実装を書いてください
    let array = [];

    for (let i = 0; i < commands.length; i++) {
        const [command, numString] = commands[i].split(' ');
        const num = Number(numString);
        
        switch (command) {
            case "push":
                array.push(num);
                break
            case "pop":
                array.pop();
                break;
            case "shift":
                array.shift();
                break;
            case "unshift":
                array.unshift(num);
                break;
        }
    }

    return array;
}

// --- テスト ---
console.assert(
    JSON.stringify(runCommands(["push 1", "push 2", "unshift 0", "pop"])) ===
        JSON.stringify([0, 1]),
    "テスト1 失敗"
);
console.assert(
    JSON.stringify(runCommands(["push 5", "push 10", "shift", "push 20"])) ===
        JSON.stringify([10, 20]),
    "テスト2 失敗"
);
console.assert(
    JSON.stringify(runCommands(["pop", "shift", "push 7"])) ===
        JSON.stringify([7]),
    "テスト3 失敗（空配列での pop/shift は無視）"
);
console.assert(
    JSON.stringify(runCommands(["unshift 3", "unshift 2", "unshift 1"])) ===
        JSON.stringify([1, 2, 3]),
    "テスト4 失敗"
);
console.assert(
    JSON.stringify(runCommands([])) === JSON.stringify([]),
    "テスト5 失敗（コマンドなし）"
);

console.log("全テスト完了！エラーが表示されなければ正解です");
