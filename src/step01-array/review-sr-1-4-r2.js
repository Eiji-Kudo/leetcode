// =============================================
// 間隔反復復習: Step 1-4「for...of で配列を走査」
// 完了日: 2026-03-08 / 復習回数: 2回目
// =============================================

// 元のステップで学んだ概念:
// - for (const item of arr) で配列の各要素を順番に取り出す
// - インデックス不要なときに for ループより簡潔に書ける

// =============================================
// 復習問題: 文字列の配列から最も長い文字列を返す
//
// 文字列の配列を受け取り、最も長い文字列を返してください。
// 同じ長さの場合は最初に見つかったものを返してください。
// 空配列の場合は "" を返してください。
//
// for...of を使って実装すること。
//
// 例: ["cat", "elephant", "dog"] → "elephant"
// =============================================

function longestString(arr) {
  // TODO: ここに実装を書いてください
    let maxWord = "";
    for (const item of arr) {
        if (maxWord.length < item.length) {
            maxWord = item;
        }
    }
    return maxWord
}

// --- テスト ---
console.assert(longestString(["cat", "elephant", "dog"]) === "elephant", "テスト1 失敗");
console.assert(longestString(["a", "bb", "ccc", "dd"]) === "ccc", "テスト2 失敗");
console.assert(longestString(["hello", "world"]) === "hello", "テスト3 失敗");
console.assert(longestString(["x"]) === "x", "テスト4 失敗");
console.assert(longestString([]) === "", "テスト5 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
