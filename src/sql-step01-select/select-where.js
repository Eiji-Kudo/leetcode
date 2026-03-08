const Database = require("better-sqlite3");

// =============================================
// Step 1-2: WHERE — 条件でデータを絞り込む
// =============================================

// --- セットアップ（変更不要）---
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    salary INTEGER NOT NULL,
    hire_year INTEGER NOT NULL
  );

  INSERT INTO employees VALUES (1, 'Tanaka', 'Engineering', 600000, 2020);
  INSERT INTO employees VALUES (2, 'Suzuki', 'Sales', 450000, 2019);
  INSERT INTO employees VALUES (3, 'Yamada', 'Engineering', 550000, 2021);
  INSERT INTO employees VALUES (4, 'Sato', 'HR', 500000, 2018);
  INSERT INTO employees VALUES (5, 'Ito', 'Sales', 480000, 2022);
  INSERT INTO employees VALUES (6, 'Watanabe', 'Engineering', 700000, 2017);
  INSERT INTO employees VALUES (7, 'Kobayashi', 'HR', 520000, 2020);
`);

// =============================================
// 問題: Engineering部門の社員の名前と給与を取得してください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください
  select name, salary
  from employees
  where department == 'Engineering'
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 3, "テスト1 失敗: Engineering部門は3人いるはず");
console.assert(result[0].name === "Tanaka", "テスト2 失敗: Tanakaが含まれるはず");
console.assert(result[0].salary === 600000, "テスト3 失敗: name と salary の2列を取得すること");
console.assert(result.every(r => Object.keys(r).length === 2), "テスト4 失敗: 取得する列は name と salary の2つだけ");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
