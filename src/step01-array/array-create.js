// =============================================
// Step 1-1: 配列の作成とアクセス
// [] で配列を作り、array[0] でインデックスアクセス
// =============================================

// --- 説明 ---
// 配列（Array）は、複数の値を順番に並べて格納するデータ構造です。
// JavaScriptでは [] を使って配列を作ります。
// 各要素には「インデックス」という番号でアクセスします。
// インデックスは 0 から始まります（0, 1, 2, ...）。

// --- 例 ---
// 配列の作り方
const fruits = ["apple", "banana", "cherry"];

// インデックスでアクセス（0から始まる）
console.log(fruits[0]); // "apple"  ← 最初の要素
console.log(fruits[1]); // "banana" ← 2番目の要素
console.log(fruits[2]); // "cherry" ← 3番目の要素

// 配列の長さ
console.log(fruits.length); // 3

// 最後の要素にアクセスする方法
console.log(fruits[fruits.length - 1]); // "cherry"

// =============================================
// 問題1: 数値の配列を作って、最初の要素を返す関数を作ろう
// =============================================

function getFirst(arr) {
  // TODO: 配列の最初の要素を返してください
  return arr[0] 
}

// =============================================
// 問題2: 配列の最後の要素を返す関数を作ろう
// =============================================

function getLast(arr) {
  // TODO: 配列の最後の要素を返してください
  // ヒント: arr.length を使おう
  return arr[arr.length-1]
}

// =============================================
// 問題3: 配列のn番目（0始まり）の要素を返す関数を作ろう
// =============================================

function getNth(arr, n) {
  // TODO: 配列のn番目の要素を返してください
  return arr[n]
}

// --- テスト ---
console.assert(getFirst([10, 20, 30]) === 10, "テスト1 失敗: getFirst([10, 20, 30]) should be 10");
console.assert(getFirst(["a", "b"]) === "a", "テスト2 失敗: getFirst(['a', 'b']) should be 'a'");

console.assert(getLast([10, 20, 30]) === 30, "テスト3 失敗: getLast([10, 20, 30]) should be 30");
console.assert(getLast([5]) === 5, "テスト4 失敗: getLast([5]) should be 5");
console.assert(getLast(["x", "y", "z"]) === "z", "テスト5 失敗: getLast(['x', 'y', 'z']) should be 'z'");

console.assert(getNth([100, 200, 300, 400], 0) === 100, "テスト6 失敗: getNth at 0 should be 100");
console.assert(getNth([100, 200, 300, 400], 2) === 300, "テスト7 失敗: getNth at 2 should be 300");
console.assert(getNth([100, 200, 300, 400], 3) === 400, "テスト8 失敗: getNth at 3 should be 400");

console.log("全テスト完了！エラーが表示されなければ全問正解です 🎉");
console.log("テストを実行: node src/step01-array/array-create.js");
