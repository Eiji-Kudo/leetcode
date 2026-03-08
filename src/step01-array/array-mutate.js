// =============================================
// Step 1-2: 配列の追加・削除
// push, pop, unshift, shift で末尾/先頭を操作
// =============================================

// --- 説明 ---
// 配列には要素を追加・削除する4つの基本メソッドがあります。
//
// 末尾の操作:
//   push(値)  → 末尾に追加（戻り値: 新しい配列の長さ）
//   pop()     → 末尾を削除（戻り値: 削除された要素）
//
// 先頭の操作:
//   unshift(値) → 先頭に追加（戻り値: 新しい配列の長さ）
//   shift()     → 先頭を削除（戻り値: 削除された要素）
//
// これらは全て「元の配列を直接変更する」（破壊的操作）点に注意！

// --- 例 ---
// const fruits = ["apple", "banana"];
// fruits.push("cherry");      // fruits → ["apple", "banana", "cherry"]
// fruits.pop();               // fruits → ["apple", "banana"], 戻り値: "cherry"
// fruits.unshift("mango");    // fruits → ["mango", "apple", "banana"]
// fruits.shift();             // fruits → ["apple", "banana"], 戻り値: "mango"

// =============================================
// 問題: キューを配列で実装しよう
//
// 「キュー」は先入れ先出し（FIFO）のデータ構造です。
// 以下の操作を行い、最終的な配列の状態を返してください:
//
// 1. 空の配列から始める
// 2. 引数で渡された items の各要素を順番に末尾に追加する
// 3. 先頭から removeCount 個の要素を取り除く
// 4. 残った配列を返す
//
// 例: buildQueue(["a", "b", "c", "d"], 2) → ["c", "d"]
//     （a,b,c,d を順に追加 → 先頭から2個削除 → ["c", "d"]）
// =============================================

function buildQueue(items, removeCount) {
  // TODO: ここに実装を書いてください

  for (i = 0; i < removeCount; i++) {
    items.shift()
    // console.log(items)
  }

  return items


}

// --- テスト ---
console.assert(JSON.stringify(buildQueue(["a", "b", "c", "d"], 2)) === JSON.stringify(["c", "d"]), "テスト1 失敗");
console.assert(JSON.stringify(buildQueue([1, 2, 3], 0)) === JSON.stringify([1, 2, 3]), "テスト2 失敗");
console.assert(JSON.stringify(buildQueue([10, 20, 30, 40, 50], 3)) === JSON.stringify([40, 50]), "テスト3 失敗");
console.assert(JSON.stringify(buildQueue(["x"], 1)) === JSON.stringify([]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
