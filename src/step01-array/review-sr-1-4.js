// =============================================
// 間隔反復復習: Step 1-4「for...of で配列を走査」
// 完了日: 2026-03-08 / 復習回数: 1回目
// =============================================

// 元のステップで学んだ概念:
// - for...of を使って配列の各要素を順番に処理する

// =============================================
// 復習問題: 文字列の配列を受け取り、最も長い文字列を返す関数を作れ
// for...of を使って配列を走査すること
// 配列が空の場合は空文字列 "" を返すこと
// =============================================

function longestWord(words) {
  // TODO: ここに実装を書いてください
    let ans = "";
    for (const word of words) {
        ans = word.length > ans.length ? word : ans;
    }
    return ans;
}

// --- テスト ---
console.assert(longestWord(["cat", "elephant", "dog"]) === "elephant", "テスト1 失敗");
console.assert(longestWord(["a", "bb", "ccc"]) === "ccc", "テスト2 失敗");
console.assert(longestWord([]) === "", "テスト3 失敗");
console.assert(longestWord(["hello"]) === "hello", "テスト4 失敗");
console.assert(longestWord(["ab", "cd", "ef"]) === "ab", "テスト5 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
