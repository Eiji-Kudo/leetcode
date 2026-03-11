const Database = require("better-sqlite3");

// =============================================
// 間隔反復復習: Step 1-2「WHERE — 条件でデータを絞り込む」
// 完了日: 2026-03-08 / 復習回数: 1回目
// =============================================

// 元のステップで学んだ概念:
// - WHERE句で条件を指定して行をフィルタリングする

// --- セットアップ（変更不要）---
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL
  );

  INSERT INTO products VALUES (1, 'ノートPC', 'Electronics', 89000, 15);
  INSERT INTO products VALUES (2, 'マウス', 'Electronics', 3500, 120);
  INSERT INTO products VALUES (3, 'デスク', 'Furniture', 25000, 8);
  INSERT INTO products VALUES (4, 'チェア', 'Furniture', 35000, 12);
  INSERT INTO products VALUES (5, 'モニター', 'Electronics', 45000, 20);
  INSERT INTO products VALUES (6, '本棚', 'Furniture', 18000, 5);
  INSERT INTO products VALUES (7, 'キーボード', 'Electronics', 8000, 80);
`);

// =============================================
// 復習問題: productsテーブルからFurnitureカテゴリの商品名(name)と価格(price)を取得してください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください
  select name, price
  from products
  where category == 'Furniture'
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 3, "テスト1 失敗: Furnitureカテゴリは3件あるはず");
console.assert(Object.keys(result[0]).length === 2, "テスト2 失敗: 取得する列はnameとpriceの2つだけ");
console.assert(result[0].name === "デスク", "テスト3 失敗: 1件目はデスク");
console.assert(result[0].price === 25000, "テスト4 失敗: デスクの価格は25000");
console.assert(result[2].name === "本棚", "テスト5 失敗: 3件目は本棚");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
