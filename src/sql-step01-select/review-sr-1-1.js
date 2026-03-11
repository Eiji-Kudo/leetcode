const Database = require("better-sqlite3");

// =============================================
// 間隔反復復習: Step 1-1「SELECT と FROM」
// 完了日: 2026-03-08 / 復習回数: 1回目
// =============================================

// 元のステップで学んだ概念:
// - SELECT で取得する列を指定する
// - FROM でテーブルを指定する

// --- セットアップ（変更不要）---
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    price INTEGER NOT NULL,
    published_year INTEGER NOT NULL
  );

  INSERT INTO books VALUES (1, 'JavaScript入門', 'Tanaka', 2800, 2021);
  INSERT INTO books VALUES (2, 'SQLマスター', 'Suzuki', 3200, 2022);
  INSERT INTO books VALUES (3, 'Python実践', 'Sato', 2500, 2020);
  INSERT INTO books VALUES (4, 'Web開発の教科書', 'Tanaka', 3500, 2023);
  INSERT INTO books VALUES (5, 'データベース設計', 'Yamada', 2900, 2019);
  INSERT INTO books VALUES (6, 'アルゴリズム入門', 'Ito', 3100, 2022);
`);

// =============================================
// 復習問題: booksテーブルからタイトル(title)と著者(author)と価格(price)を取得してください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください

  SELECT title, author, price
  FROM books;
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 6, "テスト1 失敗: 6行返るべき");
console.assert(Object.keys(result[0]).length === 3, "テスト2 失敗: 列は3つだけ返るべき");
console.assert(result[0].title === "JavaScript入門", "テスト3 失敗: 1行目のtitleはJavaScript入門");
console.assert(result[0].author === "Tanaka", "テスト4 失敗: 1行目のauthorはTanaka");
console.assert(result[0].price === 2800, "テスト5 失敗: 1行目のpriceは2800");
console.assert(result[5].title === "アルゴリズム入門", "テスト6 失敗: 6行目のtitleはアルゴリズム入門");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
