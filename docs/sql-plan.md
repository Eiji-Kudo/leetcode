# SQL 書き方学習プロジェクト計画

## 概要

SQLの書き方をゼロから学び、実務レベルのクエリが書けるようになるまでのステップバイステップ学習プラン。

各ステップで Claude Code が baby step で進行し、1つずつ理解を確認しながら進める。

### 全体ロードマップ

1ステップ = 約30分〜1時間（説明 + 実装 + テスト）

| フェーズ | 内容 | ステップ数 | 状態 |
|---|---|---|---|
| Phase 1 | SELECT基礎・集約・JOIN (Step 1〜3) | ~28 | 📋 本計画 |
| Phase 2 | サブクエリ・データ操作・ウィンドウ関数 (Step 4〜6) | ~24 | 📋 本計画 |
| Phase 3 | 実践SQL問題 (Step 7〜8) | ~18 | 📋 本計画 |

> Phase 1〜3（本計画）= **全70ステップ**（うち🔁復習8回）

### Phase 1〜3 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 1 | SELECT基礎 | 9 |
| Step 2 | 集約とグループ化 | 10 |
| Step 3 | JOIN | 9 |
| Step 4 | サブクエリ | 8 |
| Step 5 | データ操作と集合演算 | 8 |
| Step 6 | ウィンドウ関数 | 8 |
| Step 7 | 実践SQL問題（基礎編） | 10 |
| Step 8 | 実践SQL問題（応用編） | 8 |

## 実行環境

Node.js + better-sqlite3（インメモリSQLite）

```bash
npm install better-sqlite3
```

## プロジェクト構造

```
leetcode/
├── docs/
│   ├── sql-plan.md
│   └── sql-progress.json
├── src/
│   ├── sql-step01-select/
│   ├── sql-step02-aggregate/
│   ├── sql-step03-join/
│   ├── sql-step04-subquery/
│   ├── sql-step05-dml/
│   ├── sql-step06-window/
│   ├── sql-step07-practice-basic/
│   └── sql-step08-practice-advanced/
└── package.json
```

---

## 進捗

### Step 1: SELECT基礎

**目標**: テーブルからデータを取得する基本を身につける

- [x] **1-1** SELECT と FROM — テーブルから列を指定してデータを取得する (`select-basic.js`)
- [x] **1-2** WHERE — 条件でデータを絞り込む (`select-where.js`)
- [x] **1-3** 比較演算子 — `=`, `<>`, `<`, `>`, `BETWEEN`, `IN` で条件を指定する (`select-comparison.js`)
- [ ] **1-4** 論理演算子 — `AND`, `OR`, `NOT` で複合条件を作る (`select-logic.js`)
- [ ] **1-5** LIKE — `%` と `_` でパターンマッチング (`select-like.js`)
- [ ] **1-6** ORDER BY — 結果をソートする（`ASC`, `DESC`） (`select-order.js`)
- [ ] **1-7** LIMIT と OFFSET — 結果の件数を制限する (`select-limit.js`)
- [ ] **1-8** NULL の扱い — `IS NULL`, `IS NOT NULL`, `COALESCE` (`select-null.js`)
- [ ] **1-9** 練習: SELECT + WHERE + ORDER BY 総合問題 (`practice-select.js`)

### Step 2: 集約とグループ化

**目標**: 集約関数とグループ化を使った集計を理解する

- [ ] **2-1** COUNT — 行数を数える (`agg-count.js`)
- [ ] **2-2** SUM と AVG — 合計・平均を求める (`agg-sum-avg.js`)
- [ ] **2-3** MIN と MAX — 最小・最大値を求める (`agg-min-max.js`)
- [ ] **2-4** DISTINCT — 重複を除く (`agg-distinct.js`)
- [ ] **2-5** GROUP BY — グループ別に集計する (`agg-group-by.js`)
- [ ] **2-6** HAVING — グループに条件を付ける (`agg-having.js`)
- [ ] **2-7** 集約関数の組み合わせ — COUNT + GROUP BY + HAVING の連携 (`agg-combine.js`)
- [ ] **2-8** 🔁 **復習: Step 1+2** — SELECT + 集約の混合問題 (`review-select-agg.js`)
- [ ] **2-9** 練習: 売上データの集計 (`practice-sales-agg.js`)
- [ ] **2-10** 練習: 条件付きグループ集計 (`practice-group-filter.js`)

### Step 3: JOIN

**目標**: 複数テーブルの結合を理解する

- [ ] **3-1** テーブルの関連 — リレーショナルDBの考え方と外部キー (`join-concept.js`)
- [ ] **3-2** INNER JOIN — 両方に一致するデータを結合する (`join-inner.js`)
- [ ] **3-3** LEFT JOIN — 左テーブルを基準に結合する (`join-left.js`)
- [ ] **3-4** 複数テーブルのJOIN — 3つ以上のテーブルを結合する (`join-multi.js`)
- [ ] **3-5** 自己結合 — 同じテーブル同士をJOINする (`join-self.js`)
- [ ] **3-6** CROSS JOIN — 全組み合わせを生成する (`join-cross.js`)
- [ ] **3-7** 🔁 **復習: Step 1〜3** — SELECT + 集約 + JOIN の混合問題 (`review-steps-1-3.js`)
- [ ] **3-8** 練習: 社員と部署の結合 (`practice-emp-dept.js`)
- [ ] **3-9** 練習: 注文・商品・顧客の結合 (`practice-orders.js`)

### Step 4: サブクエリ

**目標**: サブクエリの種類と使い分けを理解する

- [ ] **4-1** スカラーサブクエリ — 1つの値を返すサブクエリ (`sub-scalar.js`)
- [ ] **4-2** WHERE内のサブクエリ — `IN`, `ANY`, `ALL` で条件指定 (`sub-where.js`)
- [ ] **4-3** EXISTS — 存在チェックで絞り込む (`sub-exists.js`)
- [ ] **4-4** FROM内のサブクエリ — 派生テーブルとして使う (`sub-from.js`)
- [ ] **4-5** 相関サブクエリ — 外部クエリの行を参照するサブクエリ (`sub-correlated.js`)
- [ ] **4-6** 🔁 **復習: Step 3+4** — JOIN + サブクエリ の混合問題 (`review-join-sub.js`)
- [ ] **4-7** 練習: サブクエリで最大値のある行を取得 (`practice-sub-max.js`)
- [ ] **4-8** 練習: EXISTS vs JOIN の使い分け (`practice-exists-join.js`)

### Step 5: データ操作と集合演算

**目標**: データの追加・更新・削除と集合演算を理解する

- [ ] **5-1** INSERT — データの挿入 (`dml-insert.js`)
- [ ] **5-2** UPDATE — データの更新 (`dml-update.js`)
- [ ] **5-3** DELETE — データの削除 (`dml-delete.js`)
- [ ] **5-4** UNION と UNION ALL — 結果の結合 (`set-union.js`)
- [ ] **5-5** CASE式 — SQLでの条件分岐 (`case-expression.js`)
- [ ] **5-6** CASE式の応用 — 条件付き集計とピボット風変換 (`case-advanced.js`)
- [ ] **5-7** 🔁 **復習: Step 1〜5** — 全パターン混合問題 (`review-steps-1-5.js`)
- [ ] **5-8** 練習: CASE式を使った売上レポート (`practice-case-report.js`)

### Step 6: ウィンドウ関数

**目標**: ウィンドウ関数で行単位の分析を行う

- [ ] **6-1** OVER句の基本 — ウィンドウ関数とは何か (`win-intro.js`)
- [ ] **6-2** ROW_NUMBER — 行番号を振る (`win-row-number.js`)
- [ ] **6-3** RANK と DENSE_RANK — 順位付け (`win-rank.js`)
- [ ] **6-4** PARTITION BY — グループ内での順位・集計 (`win-partition.js`)
- [ ] **6-5** LAG と LEAD — 前後の行を参照する (`win-lag-lead.js`)
- [ ] **6-6** SUM/AVG OVER — 累積合計・移動平均 (`win-running.js`)
- [ ] **6-7** 🔁 **復習: Step 5+6** — データ操作 + ウィンドウ関数の混合問題 (`review-dml-win.js`)
- [ ] **6-8** 練習: 売上ランキングと前月比較 (`practice-ranking.js`)

### Step 7: 実践SQL問題（基礎編）

**目標**: 実務的なシナリオでSQLを書く

- [ ] **7-1** 顧客の注文履歴一覧 — JOIN + ORDER BY (`real-order-history.js`)
- [ ] **7-2** カテゴリ別売上集計 — GROUP BY + SUM + JOIN (`real-category-sales.js`)
- [ ] **7-3** 未注文の顧客を探す — LEFT JOIN + IS NULL (`real-no-orders.js`)
- [ ] **7-4** 月別売上推移 — 日付関数 + GROUP BY (`real-monthly-sales.js`)
- [ ] **7-5** 売上トップNの商品 — ORDER BY + LIMIT (`real-top-products.js`)
- [ ] **7-6** 🔁 **復習: Step 7前半** — 7-1〜7-5 のパターン混合問題 (`review-real-1.js`)
- [ ] **7-7** 重複データの検出 — GROUP BY + HAVING + COUNT (`real-find-dupes.js`)
- [ ] **7-8** 連続ログイン日数 — 日付計算 + ウィンドウ関数 (`real-consecutive-login.js`)
- [ ] **7-9** 練習: ECサイトの売上分析レポート (`practice-ec-report.js`)
- [ ] **7-10** 練習: 社員の給与分析 (`practice-salary-analysis.js`)

### Step 8: 実践SQL問題（応用編）

**目標**: 複雑なクエリを自力で組み立てる

- [ ] **8-1** 顧客のLTV（生涯価値）計算 — 複数集約 + JOIN (`adv-ltv.js`)
- [ ] **8-2** 前月比・前年比の売上比較 — LAG + ウィンドウ関数 (`adv-yoy-comparison.js`)
- [ ] **8-3** ABC分析（パレート分析） — 累積合計 + CASE分類 (`adv-abc-analysis.js`)
- [ ] **8-4** ファネル分析 — 段階別のコンバージョン率 (`adv-funnel.js`)
- [ ] **8-5** コホート分析 — 初回購入月ごとのリテンション (`adv-cohort.js`)
- [ ] **8-6** 🔁 **復習: Step 7+8** — 実践問題の総復習 (`review-real-all.js`)
- [ ] **8-7** 練習: ダッシュボード用の集計クエリ一式 (`practice-dashboard.js`)
- [ ] **8-8** 練習: 総合力テスト — 複合問題 (`practice-final.js`)

---

## 各ステップの進め方（共通）

1. **Claude Code がファイルを生成**
   - インメモリSQLiteのセットアップ（テーブル作成 + テストデータ投入）
   - 問題の説明
   - `-- TODO: ここにSQLクエリを書いてください` マーカー
   - テストケース（`console.assert`）

2. **ユーザーが実装**
   - テンプレートの TODO 部分にSQLクエリを書く
   - `node src/sql-stepXX/filename.js` で実行・確認

3. **Claude Code がレビュー**
   - テストが通っているか確認
   - クエリの改善点のアドバイス
   - 別解の紹介（あれば）

4. **次の問題へ進む**

---

## セットアップ

```bash
npm install better-sqlite3
```

---

## 始め方

> `/sql-next` と Claude Code に伝えるだけでOK。
> Claude Code がテンプレートを作成し、ガイドします。
