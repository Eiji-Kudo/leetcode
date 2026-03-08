// =============================================
// Step 1-5: map — 各要素を変換して新しい配列を返す
// =============================================

// =============================================
// 問題: 数値の配列を受け取り、各要素を文字列に変換して
//       末尾に "点" をつけた新しい配列を返す関数を作ってください。
//       例: [85, 92, 78] → ["85点", "92点", "78点"]
// =============================================

function addUnit(scores) {
  // TODO: ここに実装を書いてください
  return scores.map((score) => `${score}点`)
}

// --- テスト ---
console.assert(JSON.stringify(addUnit([85, 92, 78])) === JSON.stringify(["85点", "92点", "78点"]), "テスト1 失敗");
console.assert(JSON.stringify(addUnit([100])) === JSON.stringify(["100点"]), "テスト2 失敗");
console.assert(JSON.stringify(addUnit([])) === JSON.stringify([]), "テスト3 失敗");
console.assert(JSON.stringify(addUnit([0, 50, 100])) === JSON.stringify(["0点", "50点", "100点"]), "テスト4 失敗");

console.log("全テスト完了！エラーが表示されなければ正解です");
