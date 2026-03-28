const Database = require("better-sqlite3");

// =============================================
// 間隔反復復習: Step 1-2「WHERE — 条件でデータを絞り込む」
// 完了日: 2026-03-08 / 復習回数: 2回目
// =============================================

// 元のステップで学んだ概念:
// - WHERE句で条件を指定して行をフィルタリングする

// --- セットアップ（変更不要）---
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    grade TEXT NOT NULL,
    score INTEGER NOT NULL,
    club TEXT NOT NULL
  );

  INSERT INTO students VALUES (1, 'Aoki', 'A', 85, 'Soccer');
  INSERT INTO students VALUES (2, 'Baba', 'B', 72, 'Tennis');
  INSERT INTO students VALUES (3, 'Chiba', 'A', 91, 'Soccer');
  INSERT INTO students VALUES (4, 'Doi', 'C', 68, 'Baseball');
  INSERT INTO students VALUES (5, 'Endo', 'B', 77, 'Tennis');
  INSERT INTO students VALUES (6, 'Fuji', 'A', 88, 'Baseball');
  INSERT INTO students VALUES (7, 'Goto', 'C', 65, 'Soccer');
`);

// =============================================
// 復習問題: studentsテーブルからgradeが'B'の生徒の名前(name)とスコア(score)を取得してください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください
    select name, score
    from students
    where grade = 'B';
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 2, "テスト1 失敗: gradeがBの生徒は2人いるはず");
console.assert(Object.keys(result[0]).length === 2, "テスト2 失敗: 取得する列はnameとscoreの2つだけ");
console.assert(result[0].name === "Baba", "テスト3 失敗: 1人目はBaba");
console.assert(result[0].score === 72, "テスト4 失敗: Babaのscoreは72");
console.assert(result[1].name === "Endo", "テスト5 失敗: 2人目はEndo");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
