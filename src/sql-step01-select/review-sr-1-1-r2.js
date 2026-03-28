const Database = require("better-sqlite3");

// =============================================
// 間隔反復復習: Step 1-1「SELECT と FROM」
// 完了日: 2026-03-08 / 復習回数: 2回目
// =============================================

// 元のステップで学んだ概念:
// - SELECT で取得する列を指定する
// - FROM でテーブルを指定する

// --- セットアップ（変更不要）---
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    director TEXT NOT NULL,
    genre TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    rating REAL NOT NULL
  );

  INSERT INTO movies VALUES (1, 'Inception', 'Nolan', 'SF', 2010, 8.8);
  INSERT INTO movies VALUES (2, 'Parasite', 'Bong', 'Thriller', 2019, 8.5);
  INSERT INTO movies VALUES (3, 'Spirited Away', 'Miyazaki', 'Animation', 2001, 8.6);
  INSERT INTO movies VALUES (4, 'The Dark Knight', 'Nolan', 'Action', 2008, 9.0);
  INSERT INTO movies VALUES (5, 'Your Name', 'Shinkai', 'Animation', 2016, 8.4);
  INSERT INTO movies VALUES (6, 'Interstellar', 'Nolan', 'SF', 2014, 8.7);
  INSERT INTO movies VALUES (7, 'Oldboy', 'Park', 'Thriller', 2003, 8.4);
`);

// =============================================
// 復習問題: moviesテーブルからタイトル(title)とジャンル(genre)と評価(rating)を取得してください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください
    select title, genre, rating
    from movies;
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 7, "テスト1 失敗: 7行返るべき");
console.assert(Object.keys(result[0]).length === 3, "テスト2 失敗: 列は3つだけ返るべき");
console.assert(result[0].title === "Inception", "テスト3 失敗: 1行目のtitleはInception");
console.assert(result[0].genre === "SF", "テスト4 失敗: 1行目のgenreはSF");
console.assert(result[0].rating === 8.8, "テスト5 失敗: 1行目のratingは8.8");
console.assert(result[6].title === "Oldboy", "テスト6 失敗: 7行目のtitleはOldboy");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
