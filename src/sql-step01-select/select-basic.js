const Database = require("better-sqlite3");

// =============================================
// Step 1-1: SELECT と FROM
// =============================================

// --- セットアップ（変更不要）---
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    salary INTEGER NOT NULL,
    hire_date TEXT NOT NULL
  );

  INSERT INTO employees VALUES (1, 'Tanaka', 'Engineering', 600000, '2020-04-01');
  INSERT INTO employees VALUES (2, 'Suzuki', 'Sales', 450000, '2019-07-15');
  INSERT INTO employees VALUES (3, 'Sato', 'Engineering', 550000, '2021-01-10');
  INSERT INTO employees VALUES (4, 'Yamada', 'HR', 500000, '2018-11-01');
  INSERT INTO employees VALUES (5, 'Ito', 'Sales', 480000, '2022-03-20');
`);

// =============================================
// 問題: employeesテーブルから名前(name)と部署(department)だけを取得してください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください
  select name, department
  from employees;
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 5, "テスト1 失敗: 5行返るべき");
console.assert(Object.keys(result[0]).length === 2, "テスト2 失敗: 列は2つだけ返るべき");
console.assert(result[0].name === "Tanaka", "テスト3 失敗: 1行目のnameはTanaka");
console.assert(result[0].department === "Engineering", "テスト4 失敗: 1行目のdepartmentはEngineering");
console.assert(result[4].name === "Ito", "テスト5 失敗: 5行目のnameはIto");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
