// =============================================
// Step 2-5: 復習 — Step 1+2 前半
// =============================================

// =============================================
// 問題: イベントの参加登録者名と、参加を取り消した人の名前を受け取り、
// 取り消し対象を除いた参加者一覧を返してください。
// 同じ人が複数回登録している場合は1回だけ残し、
// 最初に登録された順番を保持してください。
// =============================================

function getActiveAttendees(registrations, cancelledNames) {
  // TODO: ここに実装を書いてください
    const registSet = new Set(registrations);
    const cancelledSet = new Set(cancelledNames);

    const common = registSet.intersection(cancelledSet);

    // 最初に登録した順番にする
    // registSetからcommonに含まれているものを取り出す
    const ans = [...registSet].filter((value) => !common.has(value));

    return ans;
}

// --- テスト ---
console.assert(
  JSON.stringify(getActiveAttendees(
    ["alice", "bob", "alice", "carol"],
    ["bob"],
  )) === JSON.stringify(["alice", "carol"]),
  "テスト1 失敗",
);
console.assert(
  JSON.stringify(getActiveAttendees(
    ["x", "y", "z", "y"],
    ["x", "z"],
  )) === JSON.stringify(["y"]),
  "テスト2 失敗",
);
console.assert(
  JSON.stringify(getActiveAttendees([], ["anyone"])) === JSON.stringify([]),
  "テスト3 失敗",
);
console.assert(
  JSON.stringify(getActiveAttendees(["a", "a", "b"], [])) ===
    JSON.stringify(["a", "b"]),
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
