// =============================================
// 間隔反復復習: Step 1-7「reduce — 配列を1つの値にまとめる」
// 完了日: 2026-07-16 / 復習回数: 1回目
// =============================================

// =============================================
// 復習問題: 1日の摂取カロリーを合計する
// =============================================

// 食事の配列を受け取り、その日の摂取カロリーの合計を返してください。
// 各要素は { name: 食事名, calories: カロリー } の形式です。
// 食事がない場合は 0 を返してください。

function sumCalories(meals) {
  // TODO: ここに実装を書いてください
    return meals.reduce((total, meal) => total + meal.calories, 0);
}

// --- テスト ---
console.assert(
  sumCalories([
    { name: "朝食", calories: 450 },
    { name: "昼食", calories: 700 },
    { name: "夕食", calories: 600 },
  ]) === 1750,
  "テスト1 失敗",
);
console.assert(
  sumCalories([{ name: "おやつ", calories: 180 }]) === 180,
  "テスト2 失敗",
);
console.assert(sumCalories([]) === 0, "テスト3 失敗");
console.assert(
  sumCalories([{ name: "水", calories: 0 }, { name: "果物", calories: 95 }]) === 95,
  "テスト4 失敗",
);

console.log("全テスト完了！エラーが表示されなければ正解です");
