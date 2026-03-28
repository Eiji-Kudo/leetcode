const Database = require("better-sqlite3");

// =============================================
// Step 1-3: 比較演算子
// =============================================

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
  INSERT INTO products VALUES (8, 'ヘッドセット', 'Electronics', 12000, 30);
`);

// =============================================
// 問題: 価格が10000以上50000以下の商品の名前(name)と価格(price)を取得してください
//       BETWEENを使ってください
// =============================================

const query = `
-- TODO: ここにSQLクエリを書いてください
    select name, price
    from products
    where price between 10000 and 50000;
`;

// --- テスト（変更不要）---
const result = db.prepare(query).all();
console.assert(result.length === 5, "テスト1 失敗: 該当する商品は5件あるはず");
console.assert(Object.keys(result[0]).length === 2, "テスト2 失敗: 取得する列はnameとpriceの2つだけ");
console.assert(result[0].name === "デスク", "テスト3 失敗: 1件目はデスク");
console.assert(result[0].price === 25000, "テスト4 失敗: デスクの価格は25000");
console.assert(result[4].name === "ヘッドセット", "テスト5 失敗: 5件目はヘッドセット");

console.log("全テスト完了！エラーが表示されなければ正解です");
db.close();
