// =============================================
// Step 1-3: for ループで配列を走査
// for (let i = 0; i < arr.length; i++) の基本形
// =============================================

// --- 説明 ---
// 配列の要素を1つずつ順番に処理したいとき、for ループを使います。
// 基本の形:
//
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);  // i番目の要素にアクセス
//   }
//
// - i はインデックス（0から始まる）
// - i < arr.length で配列の最後まで繰り返す
// - i++ で毎回1つ進む
//
// インデックス i が使えるのが for ループの強み。
// 「何番目の要素か」が重要な場面で特に役立ちます。

// --- 例 ---
// const nums = [10, 20, 30];
// let total = 0;
// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }
// // total → 60
//
// const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + "番目: " + fruits[i]);
// }
// // 0番目: apple
// // 1番目: banana
// // 2番目: cherry

// =============================================
// 問題: 数値の配列を受け取り、偶数だけを合計して返す関数を作れ
// 例: [1, 2, 3, 4, 5, 6] → 2 + 4 + 6 = 12
// ヒント: 偶数かどうかは num % 2 === 0 で判定できる
// =============================================

function sumEven(arr) {
  // TODO: ここに実装を書いてください

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i]
    }
  }

  return result;

}

// --- テスト ---
console.assert(sumEven([1, 2, 3, 4, 5, 6]) === 12, "テスト1 失敗");
console.assert(sumEven([1, 3, 5]) === 0, "テスト2 失敗: 偶数がない場合は0");
console.assert(sumEven([2, 4, 6, 8]) === 20, "テスト3 失敗: 全て偶数");
console.assert(sumEven([]) === 0, "テスト4 失敗: 空配列");
console.assert(sumEven([7]) === 0, "テスト5 失敗: 要素1つで奇数");

console.log("全テスト完了！エラーが表示されなければ正解です");
