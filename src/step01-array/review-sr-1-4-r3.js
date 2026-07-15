// =============================================
// 間隔反復復習: Step 1-4「for...of で配列を走査」
// 完了日: 2026-03-08 / 復習回数: 3回目
// =============================================

// =============================================
// 復習問題: 条件に合う文字列の長さの合計を返す
//
// 文字列の配列を受け取り、長さが4文字以上の文字列だけを対象にして、
// それらの長さの合計を返してください。
// 対象となる文字列がない場合は 0 を返してください。
// =============================================

function sumLongWordLengths(words) {
    // TODO: ここに実装を書いてください
    return words.reduce((total, word) => {
        if (word.length >= 4) return total += word.length
        else return total;
    },0)
}

// --- テスト ---
console.assert(sumLongWordLengths(["cat", "apple", "banana"]) === 11, "テスト1 失敗");
console.assert(sumLongWordLengths(["a", "bb", "ccc"]) === 0, "テスト2 失敗");
console.assert(sumLongWordLengths(["four"]) === 4, "テスト3 失敗");
console.assert(sumLongWordLengths([]) === 0, "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
