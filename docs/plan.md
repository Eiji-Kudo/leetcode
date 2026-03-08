# LeetCode 練習プロジェクト計画

## 概要

プログラミング基礎（データ構造・アルゴリズム）をゼロから学び、LeetCode Easyを解けるようになるまでのステップバイステップ学習プラン。

各ステップで Claude Code が baby step で進行し、1つずつ理解を確認しながら進める。

### 全体ロードマップ

1ステップ = 約45分〜1時間（説明 + 実装 + テスト）

| フェーズ | 内容 | ステップ数 | 想定時間 | 状態 |
|---|---|---|---|---|
| Phase 1 | 基礎文法・データ構造 (Step 1〜6) | ~54 | ~40〜54h | 📋 本計画 |
| Phase 2 | LeetCode Easy (Step 7〜8) | ~28 | ~21〜28h | 📋 本計画 |
| Phase 3 | Easy 定着 + 追加パターン (再帰、BFS/DFS、二分探索、linked list) | ~40〜50 | ~30〜50h | 🔮 未計画 |
| Phase 4 | LeetCode Medium 入門 | ~30〜40 | ~23〜40h | 🔮 未計画 |
| Phase 5 | Medium 演習 + パターン定着 (DP、グラフ、木、バックトラッキング等) | ~50〜70 | ~38〜70h | 🔮 未計画 |
| | **ゼロ → Medium が解ける** | **~150〜170** | **~115〜170h** | |
| | **ゼロ → Medium が安定して解ける** | **~200〜240** | **~150〜240h** | |

> Phase 1〜2（本計画）= **全82ステップ / 約60〜80時間**（うち🔁復習9回）
> Phase 3〜4 は Easy を一通り終えた後に詳細を計画する

### Phase 1〜2 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 1 | 配列の基本操作 | 10 |
| Step 2 | Set と Map | 11 |
| Step 3 | 文字列操作 | 8 |
| Step 4 | ループパターン | 9 |
| Step 5 | Two Pointers | 9 |
| Step 6 | HashMap 活用 | 7 |
| Step 7 | LeetCode Easy 基礎 | 14 |
| Step 8 | LeetCode Easy 応用 | 14 |

## 使用言語

JavaScript

## プロジェクト構造

```
leetcode/
├── docs/
│   └── plan.md
├── src/
│   ├── step01-array/
│   ├── step02-set-map/
│   ├── step03-string/
│   ├── step04-loops/
│   ├── step05-two-pointers/
│   ├── step06-hashmap/
│   ├── step07-easy-basic/
│   └── step08-easy-advanced/
└── package.json
```

---

## 進捗

### Step 1: 配列の基本操作

**目標**: 配列の作り方・アクセス・操作を理解する

- [x] **1-1** 配列の作成とアクセス — `[]` で配列を作り、`array[0]` でインデックスアクセス (`array-create.js`) ✅ 2026-03-08
- [x] **1-2** 配列の追加・削除 — `push`, `pop`, `unshift`, `shift` で末尾/先頭を操作 (`array-mutate.js`) ✅ 2026-03-08
- [x] **1-3** for ループで配列を走査 — `for (let i = 0; i < arr.length; i++)` の基本形 (`array-for-loop.js`) ✅ 2026-03-08
- [x] **1-4** for...of で配列を走査 — `for (const item of arr)` でシンプルに回す (`array-for-of.js`) ✅ 2026-03-08
- [x] **1-5** map — 各要素を変換して新しい配列を返す (`array-map.js`) ✅ 2026-03-08
- [ ] **1-6** filter — 条件に合う要素だけ集める (`array-filter.js`)
- [ ] **1-7** reduce — 配列を1つの値にまとめる（合計など） (`array-reduce.js`)
- [ ] **1-8** includes / indexOf — 要素が含まれるか調べる (`array-search.js`)
- [ ] **1-9** 練習: 配列の最大値を返す関数 (`practice-max.js`)
- [ ] **1-10** 練習: 配列を逆順にする関数 (`practice-reverse.js`)

### Step 2: Set と Map

**目標**: Set と Map の概念・使い方を理解する

- [ ] **2-1** Set の作成と基本操作 — `new Set()`, `add`, `has`, `size` (`set-create.js`)
- [ ] **2-2** Set の削除と変換 — `delete`, `clear`, `Array.from(set)` でSet↔配列 (`set-convert.js`)
- [ ] **2-3** Set で重複除去 — 配列から重複を取り除く定番パターン (`set-dedupe.js`)
- [ ] **2-4** Set で共通要素を抽出 — 2つの配列の交差(intersection) (`set-intersection.js`)
- [ ] **2-5** 🔁 **復習: Step 1+2前半** — 配列 + Set の混合ミニ問題3問 (`review-array-set.js`)
- [ ] **2-6** Map の作成と基本操作 — `new Map()`, `set`, `get`, `has` (`map-create.js`)
- [ ] **2-7** Map の削除と走査 — `delete`, `for...of`, `map.entries()` (`map-iterate.js`)
- [ ] **2-8** Map で出現回数カウント — 要素ごとの頻度を数える定番パターン (`map-count.js`)
- [ ] **2-9** Map でグルーピング — 条件ごとに要素を分類する (`map-group.js`)
- [ ] **2-10** 練習: 配列に重複があるか判定（Setで） (`practice-has-duplicate.js`)
- [ ] **2-11** 練習: 2つの配列の共通要素を返す (`practice-common-elements.js`)

### Step 3: 文字列操作

**目標**: 文字列の操作方法と配列との関係を理解する

- [ ] **3-1** 文字列の基本 — `length`, `str[i]` でインデックスアクセス (`string-access.js`)
- [ ] **3-2** split と join — 文字列↔配列の変換 (`string-split-join.js`)
- [ ] **3-3** 検索メソッド — `includes`, `startsWith`, `endsWith`, `indexOf` (`string-search.js`)
- [ ] **3-4** 変換メソッド — `toLowerCase`, `toUpperCase`, `trim`, `replace` (`string-transform.js`)
- [ ] **3-5** split → 配列操作 → join パターン — 文字列加工の定番フロー (`string-pipeline.js`)
- [ ] **3-6** 🔁 **復習: Step 1〜3** — 配列・Set/Map・文字列の混合問題4問 (`review-steps-1-3.js`)
- [ ] **3-7** 練習: 回文判定（文字列を逆にして比較） (`practice-palindrome.js`)
- [ ] **3-8** 練習: 文字の出現回数カウント（Mapを使って） (`practice-char-count.js`)

### Step 4: ループパターン

**目標**: LeetCode頻出のループパターンを身につける

- [ ] **4-1** 合計を求める — ループで配列の合計を計算する (`loop-sum.js`)
- [ ] **4-2** 最大値・最小値を求める — ループで最大/最小を追跡する (`loop-min-max.js`)
- [ ] **4-3** 条件カウント — 条件に合う要素を数える (`loop-count.js`)
- [ ] **4-4** 条件で集める — 条件に合う要素を新しい配列に集める (`loop-collect.js`)
- [ ] **4-5** 早期リターン — 見つけたら即 return するパターン (`loop-early-return.js`)
- [ ] **4-6** ネストループ基礎 — 二重ループで全ペアを調べる (`loop-nested-basic.js`)
- [ ] **4-7** ネストループ応用 — 二重ループで条件を満たすペアを見つける (`loop-nested-pair.js`)
- [ ] **4-8** 🔁 **復習: Step 1〜4** — これまでの全パターン混合問題5問 (`review-steps-1-4.js`)
- [ ] **4-9** 練習: 配列内のペアの和が target になるか（二重ループ） (`practice-pair-sum.js`)

### Step 5: Two Pointers パターン

**目標**: 2つのポインタを使う基本パターンを理解する

- [ ] **5-1** Two Pointersの考え方 — なぜ2つのポインタを使うのか、図解で理解 (`tp-concept.js`)
- [ ] **5-2** 左右から挟む: 回文チェック — 両端から中央に向かって比較 (`tp-palindrome.js`)
- [ ] **5-3** 左右から挟む: ペア探索 — ソート済み配列で合計がtargetになるペアを探す (`tp-pair-sum.js`)
- [ ] **5-4** 高速・低速ポインタの考え方 — fast/slowの動き方を配列で体験 (`tp-fast-slow-intro.js`)
- [ ] **5-5** 高速・低速ポインタ応用 — 配列の中間地点を見つける (`tp-fast-slow-mid.js`)
- [ ] **5-6** スライディングウィンドウの考え方 — 固定長ウィンドウとは何か (`tp-window-intro.js`)
- [ ] **5-7** スライディングウィンドウ実践 — 長さkの連続部分配列の最大和 (`tp-window-max-sum.js`)
- [ ] **5-8** 🔁 **復習: Step 4+5** — ループパターン + Two Pointers 混合問題4問 (`review-loops-tp.js`)
- [ ] **5-9** 練習: ソート済み配列の重複除去（in-place） (`practice-remove-dupes.js`)

### Step 6: HashMap 活用パターン

**目標**: HashMap（Mapオブジェクト）を使った頻出パターンを習得する

- [ ] **6-1** 頻度カウント基礎 — 配列の各要素が何回出現するかMapで数える (`hm-frequency.js`)
- [ ] **6-2** 頻度カウント応用 — 最も多く出現する要素を返す (`hm-most-frequent.js`)
- [ ] **6-3** 補数探索の考え方 — target - num で「探すべき値」を計算する発想 (`hm-complement-intro.js`)
- [ ] **6-4** 補数探索の実装 — Two Sum をMapで O(n) で解く (`hm-two-sum.js`)
- [ ] **6-5** アナグラム判定基礎 — 2つの文字列の文字頻度を比較する (`hm-anagram-check.js`)
- [ ] **6-6** アナグラム判定応用 — 文字列のリストをアナグラムごとにグループ化 (`hm-anagram-group.js`)
- [ ] **6-7** 🔁 **総復習: Step 1〜6** — 全パターン総合問題6問（LeetCode Easyに入る前の腕試し） (`review-all.js`)

### Step 7: LeetCode Easy 実践（基礎編）

**目標**: 実際のLeetCode Easy問題を解く

**進め方**: 問題文を読む → どのパターンか考える → 自力で考える → ヒントをもらう → 実装 → テスト → 解説

- [ ] **7-1a** Two Sum (#1) — 問題理解 & アプローチ検討 (`two-sum-plan.js`)
- [ ] **7-1b** Two Sum (#1) — 実装 & テスト (`two-sum.js`)
- [ ] **7-2a** Contains Duplicate (#217) — 問題理解 & アプローチ検討 (`contains-duplicate-plan.js`)
- [ ] **7-2b** Contains Duplicate (#217) — Set で実装 & テスト (`contains-duplicate.js`)
- [ ] **7-3a** Valid Palindrome (#125) — 問題理解 & アプローチ検討 (`valid-palindrome-plan.js`)
- [ ] **7-3b** Valid Palindrome (#125) — Two Pointers で実装 & テスト (`valid-palindrome.js`)
- [ ] **7-4** 🔁 **復習: 7-1〜7-3** — 3問のパターンを振り返り、時間を計って再実装 (`review-easy-1.js`)
- [ ] **7-5a** Valid Parentheses (#20) — スタックの概念を学ぶ (`stack-intro.js`)
- [ ] **7-5b** Valid Parentheses (#20) — 実装 & テスト (`valid-parentheses.js`)
- [ ] **7-6a** Best Time to Buy and Sell Stock (#121) — 問題理解 & アプローチ検討 (`best-time-stock-plan.js`)
- [ ] **7-6b** Best Time to Buy and Sell Stock (#121) — 累積min + 最大差分で実装 (`best-time-stock.js`)
- [ ] **7-7a** Merge Two Sorted Lists (#21) — 問題理解 & アプローチ検討 (`merge-sorted-lists-plan.js`)
- [ ] **7-7b** Merge Two Sorted Lists (#21) — Two Pointers で実装 & テスト (`merge-sorted-lists.js`)
- [ ] **7-8** 🔁 **復習: Step 7 全体** — 6問をパターン別に整理し、2問を再実装 (`review-easy-all.js`)

### Step 8: LeetCode Easy 応用

**目標**: より多くのEasy問題に自力で挑戦する

- [ ] **8-1a** Roman to Integer (#13) — 問題理解 & ローマ数字のルールを学ぶ (`roman-intro.js`)
- [ ] **8-1b** Roman to Integer (#13) — Map + ループで実装 & テスト (`roman-to-integer.js`)
- [ ] **8-2a** Longest Common Prefix (#14) — 問題理解 & アプローチ検討 (`lcp-plan.js`)
- [ ] **8-2b** Longest Common Prefix (#14) — 文字列比較で実装 & テスト (`longest-common-prefix.js`)
- [ ] **8-3a** Remove Duplicates from Sorted Array (#26) — 問題理解 & in-placeの意味 (`remove-dupes-plan.js`)
- [ ] **8-3b** Remove Duplicates from Sorted Array (#26) — Two Pointers で実装 (`remove-duplicates.js`)
- [ ] **8-4** 🔁 **復習: 8-1〜8-3 + Step 7から2問** — 5問を時間制限付きで再実装 (`review-easy-2.js`)
- [ ] **8-5a** Maximum Subarray (#53) — Kadane's Algorithm の考え方を学ぶ (`kadane-intro.js`)
- [ ] **8-5b** Maximum Subarray (#53) — 実装 & テスト (`maximum-subarray.js`)
- [ ] **8-6a** Climbing Stairs (#70) — 動的計画法（DP）の考え方を学ぶ (`dp-intro.js`)
- [ ] **8-6b** Climbing Stairs (#70) — DP で実装 & テスト (`climbing-stairs.js`)
- [ ] **8-7a** Single Number (#136) — XOR ビット演算の基礎を学ぶ (`xor-intro.js`)
- [ ] **8-7b** Single Number (#136) — XOR で実装 & テスト (`single-number.js`)
- [ ] **8-8** 🔁 **最終復習: Step 7+8** — 全12問からランダムに5問を時間制限付きで解く (`review-final.js`)

---

## 各ステップの進め方（共通）

1. **Claude Code がファイルを生成**
   - 説明コメント付きのテンプレート
   - 関数シグネチャ
   - テストケース（`console.assert`）
   - `// TODO: ここに実装を書いてください` マーカー

2. **ユーザーが実装**
   - テンプレートの TODO 部分を埋める
   - `node src/stepXX/filename.js` で実行・確認

3. **Claude Code がレビュー**
   - テストが通っているか確認
   - 改善点のアドバイス
   - 別解の紹介（あれば）

4. **次の問題へ進む**

---

## セットアップ

```bash
npm init -y
```

---

## 始め方

> 「Step 1-1 をやろう」と Claude Code に伝えるだけでOK。
> Claude Code がテンプレートを作成し、ガイドします。
