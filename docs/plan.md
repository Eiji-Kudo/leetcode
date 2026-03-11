# LeetCode 練習プロジェクト計画

## 概要

プログラミング基礎（データ構造・アルゴリズム）をゼロから学び、LeetCode Medium を安定して解けるようになるまでのステップバイステップ学習プラン。

各ステップで Claude Code が baby step で進行し、1つずつ理解を確認しながら進める。

### 全体ロードマップ

1ステップ = 約45分〜1時間（説明 + 実装 + テスト）

| フェーズ | 内容 | ステップ数 | 想定時間 | 状態 |
|---|---|---|---|---|
| Phase 1 | 基礎文法・データ構造 (Step 1〜6) | ~54 | ~40〜54h | 📋 本計画 |
| Phase 2 | LeetCode Easy (Step 7〜8) | ~28 | ~21〜28h | 📋 本計画 |
| Phase 3 | 計算量 + 追加パターン (Step 9〜14) | ~49 | ~37〜49h | 📋 本計画 |
| Phase 4 | LeetCode Medium 入門 (Step 15〜18) | ~35 | ~26〜35h | 📋 本計画 |
| Phase 5 | Medium 演習 + パターン定着 (Step 19〜24) | ~58 | ~44〜58h | 📋 本計画 |
| | **ゼロ → Easy が解ける (Phase 1〜2)** | **~82** | **~60〜80h** | |
| | **ゼロ → Medium が解ける (Phase 1〜4)** | **~166** | **~124〜166h** | |
| | **ゼロ → Medium が安定して解ける (Phase 1〜5)** | **~224** | **~168〜224h** | |

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

### Phase 3 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 9 | 計算量の基礎 (Big O) | 7 |
| Step 10 | 再帰 | 8 |
| Step 11 | 二分探索 | 8 |
| Step 12 | 連結リスト | 9 |
| Step 13 | 木構造・BFS/DFS | 10 |
| Step 14 | スタック・キュー応用 | 7 |

### Phase 4 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 15 | Two Pointers / Sliding Window 応用 | 8 |
| Step 16 | 動的計画法 基礎 | 10 |
| Step 17 | Medium 実践（配列・文字列・HashMap） | 9 |
| Step 18 | Medium 実践（木・連結リスト・スタック） | 8 |

### Phase 5 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 19 | DP 応用 | 10 |
| Step 20 | グラフ | 13 |
| Step 21 | バックトラッキング | 8 |
| Step 22 | ヒープ・優先度キュー | 8 |
| Step 23 | Medium 総合演習 | 10 |
| Step 24 | 総復習・Mock Interview | 9 |

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
│   ├── step08-easy-advanced/
│   ├── step09-big-o/
│   ├── step10-recursion/
│   ├── step11-binary-search/
│   ├── step12-linked-list/
│   ├── step13-tree-bfs-dfs/
│   ├── step14-stack-queue/
│   ├── step15-tp-sw-advanced/
│   ├── step16-dp-basic/
│   ├── step17-medium-arr-str/
│   ├── step18-medium-tree-ll/
│   ├── step19-dp-advanced/
│   ├── step20-graph/
│   ├── step21-backtracking/
│   ├── step22-heap/
│   ├── step23-medium-mixed/
│   └── step24-mock-interview/
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

## Phase 3: 計算量 + 追加パターン (Step 9〜14)

> Easy を確実に解けるようにしつつ、Medium に必要なデータ構造とアルゴリズムの基礎を固める

### Step 9: 計算量の基礎 (Big O Notation)

**目標**: アルゴリズムの効率（時間計算量・空間計算量）を理解し、Big O で表現できるようになる

- [ ] **9-1** Big O とは — アルゴリズムの速さを比較する考え方を学ぶ (`bigo-concept.js`)
- [ ] **9-2** O(1) と O(n) — 定数時間と線形時間の違い (`bigo-o1-on.js`)
- [ ] **9-3** O(n²) — ネストループの計算量を理解する (`bigo-on2.js`)
- [ ] **9-4** O(log n) — 半分ずつ減る処理の計算量 (`bigo-ologn.js`)
- [ ] **9-5** 空間計算量 — メモリ使用量の考え方 (`bigo-space.js`)
- [ ] **9-6** 計算量の比較と分析 — Step 1〜8 の解法を計算量で振り返る (`bigo-analysis.js`)
- [ ] **9-7** 🔁 **復習** — 計算量を意識して問題を解き直す (`review-bigo.js`)

### Step 10: 再帰 (Recursion)

**目標**: 再帰の仕組みを理解し、再帰で問題を解けるようになる

- [ ] **10-1** 再帰の考え方 — base case と recursive case (`recursion-concept.js`)
- [ ] **10-2** 再帰で合計 — 配列の合計を再帰で求める (`recursion-sum.js`)
- [ ] **10-3** フィボナッチ数列 — 再帰の典型例 (`recursion-fibonacci.js`)
- [ ] **10-4** 再帰とメモ化 — 重複計算を避けるテクニック (`recursion-memo.js`)
- [ ] **10-5** 再帰 vs ループ — 同じ問題を両方で解いて比較 (`recursion-vs-loop.js`)
- [ ] **10-6** 再帰で文字列処理 — 文字列の反転、回文判定を再帰で (`recursion-string.js`)
- [ ] **10-7** 🔁 **復習: Step 9+10** — 計算量 + 再帰の混合問題 (`review-bigo-recursion.js`)
- [ ] **10-8** 練習: Power of Two (#231) — 再帰で2のべき乗を判定 (`practice-power-of-two.js`)

### Step 11: 二分探索 (Binary Search)

**目標**: 二分探索の原理を理解し、O(log n) で探索する問題を解けるようになる

- [ ] **11-1** 二分探索の考え方 — なぜ O(log n) になるか図解で理解 (`bs-concept.js`)
- [ ] **11-2** 基本実装 — ソート済み配列で値を探す (`bs-basic.js`)
- [ ] **11-3** 境界条件の扱い — left, right, mid の動かし方を完全理解 (`bs-boundary.js`)
- [ ] **11-4** Binary Search (#704) — LeetCode Easy (`binary-search.js`)
- [ ] **11-5** Search Insert Position (#35) — LeetCode Easy (`search-insert.js`)
- [ ] **11-6** First Bad Version (#278) — LeetCode Easy (`first-bad-version.js`)
- [ ] **11-7** 🔁 **復習: 二分探索パターン** (`review-binary-search.js`)
- [ ] **11-8** 練習: Sqrt(x) (#69) — 整数平方根を二分探索で (`practice-sqrt.js`)

### Step 12: 連結リスト (Linked List)

**目標**: 連結リストの仕組みを理解し、ポインタ操作で問題を解けるようになる

- [ ] **12-1** Linked List の概念 — ノードとポインタの仕組み (`ll-concept.js`)
- [ ] **12-2** Linked List の作成 — ListNode クラスの実装 (`ll-create.js`)
- [ ] **12-3** 走査と検索 — リストを辿って要素を探す (`ll-traverse.js`)
- [ ] **12-4** 挿入と削除 — ノードの追加・削除操作 (`ll-insert-delete.js`)
- [ ] **12-5** Reverse Linked List (#206) — LeetCode Easy (`reverse-linked-list.js`)
- [ ] **12-6** Linked List Cycle (#141) — fast/slow pointer で検出 (`linked-list-cycle.js`)
- [ ] **12-7** Middle of the Linked List (#876) — fast/slow pointer で中間ノード (`middle-linked-list.js`)
- [ ] **12-8** 🔁 **復習: Linked List パターン** (`review-linked-list.js`)
- [ ] **12-9** 練習: Remove Linked List Elements (#203) (`practice-remove-elements.js`)

### Step 13: 木構造・BFS/DFS

**目標**: 二分木の構造と走査方法を理解し、木の問題を解けるようになる

- [ ] **13-1** 木構造の概念 — ノード、ルート、葉、高さ (`tree-concept.js`)
- [ ] **13-2** Binary Tree の作成 — TreeNode クラスの実装 (`tree-create.js`)
- [ ] **13-3** DFS: Preorder 走査 — 根→左→右（再帰） (`tree-preorder.js`)
- [ ] **13-4** DFS: Inorder / Postorder — 他の走査順 (`tree-inorder-postorder.js`)
- [ ] **13-5** BFS: レベル順走査 — キューを使った幅優先探索 (`tree-bfs.js`)
- [ ] **13-6** Maximum Depth of Binary Tree (#104) — LeetCode Easy (`max-depth.js`)
- [ ] **13-7** Invert Binary Tree (#226) — LeetCode Easy (`invert-tree.js`)
- [ ] **13-8** Same Tree (#100) / Symmetric Tree (#101) — LeetCode Easy (`same-symmetric-tree.js`)
- [ ] **13-9** 🔁 **復習: Tree + BFS/DFS パターン** (`review-tree.js`)
- [ ] **13-10** 練習: Path Sum (#112) — LeetCode Easy (`practice-path-sum.js`)

### Step 14: スタック・キュー応用

**目標**: スタック・キューの応用パターンを習得し、Medium 問題への橋渡しをする

- [ ] **14-1** キューの基本 — FIFO の概念と実装 (`queue-basic.js`)
- [ ] **14-2** Implement Queue using Stacks (#232) — LeetCode Easy (`queue-using-stacks.js`)
- [ ] **14-3** Monotonic Stack の概念 — 単調スタックとは (`monotonic-stack-concept.js`)
- [ ] **14-4** Next Greater Element I (#496) — LeetCode Easy (`next-greater-element.js`)
- [ ] **14-5** 🔁 **総復習: Phase 3 全体 (Step 9〜14)** — 全パターン混合問題6問 (`review-phase3.js`)
- [ ] **14-6** 練習: Min Stack (#155) — Medium 入門 (`practice-min-stack.js`)
- [ ] **14-7** 練習: Daily Temperatures (#739) — Medium 入門 (`practice-daily-temps.js`)

---

## Phase 4: LeetCode Medium 入門 (Step 15〜18)

> Easy で学んだパターンを応用し、Medium レベルの問題に挑戦する

### Step 15: Two Pointers / Sliding Window 応用

**目標**: Medium レベルの Two Pointers / Sliding Window 問題を解けるようになる

- [ ] **15-1** 可変長ウィンドウの考え方 — ウィンドウの伸縮パターン (`sw-variable-intro.js`)
- [ ] **15-2** Longest Substring Without Repeating Characters (#3) — Medium (`longest-substring.js`)
- [ ] **15-3** Container With Most Water (#11) — Medium (`container-water.js`)
- [ ] **15-4** 3Sum (#15) — Medium: Two Pointers + ソート (`three-sum.js`)
- [ ] **15-5** Minimum Size Subarray Sum (#209) — Medium (`min-subarray-sum.js`)
- [ ] **15-6** 🔁 **復習: Two Pointers / Sliding Window** (`review-tp-sw.js`)
- [ ] **15-7** 練習: Sort Colors (#75) — Medium (`practice-sort-colors.js`)
- [ ] **15-8** 練習: Permutation in String (#567) — Medium (`practice-permutation-string.js`)

### Step 16: 動的計画法 基礎 (Dynamic Programming)

**目標**: DP の考え方を理解し、基本的な 1D DP 問題を解けるようになる

- [ ] **16-1** DP の考え方 — 最適部分構造と重複部分問題 (`dp-concept.js`)
- [ ] **16-2** トップダウン（メモ化再帰）— 再帰 + メモ化で解く (`dp-top-down.js`)
- [ ] **16-3** ボトムアップ（テーブル）— 反復で解く (`dp-bottom-up.js`)
- [ ] **16-4** Climbing Stairs (#70) — 再挑戦: 両方のアプローチで解く (`dp-climbing-stairs.js`)
- [ ] **16-5** House Robber (#198) — Medium (`house-robber.js`)
- [ ] **16-6** Coin Change (#322) — Medium (`coin-change.js`)
- [ ] **16-7** Longest Increasing Subsequence (#300) — Medium (`longest-increasing-subseq.js`)
- [ ] **16-8** Maximum Product Subarray (#152) — Medium (`max-product-subarray.js`)
- [ ] **16-9** 🔁 **復習: DP 基礎パターン** (`review-dp-basic.js`)
- [ ] **16-10** 練習: Decode Ways (#91) — Medium (`practice-decode-ways.js`)

### Step 17: Medium 実践（配列・文字列・HashMap）

**目標**: 配列・文字列・HashMap を使った Medium 問題を自力で解く

- [ ] **17-1a** Product of Array Except Self (#238) — 問題理解 & アプローチ検討 (`product-array-plan.js`)
- [ ] **17-1b** Product of Array Except Self (#238) — 実装 & テスト (`product-array.js`)
- [ ] **17-2a** Group Anagrams (#49) — 問題理解 & アプローチ検討 (`group-anagrams-plan.js`)
- [ ] **17-2b** Group Anagrams (#49) — 実装 & テスト (`group-anagrams.js`)
- [ ] **17-3a** Top K Frequent Elements (#347) — 問題理解 & アプローチ検討 (`top-k-frequent-plan.js`)
- [ ] **17-3b** Top K Frequent Elements (#347) — 実装 & テスト (`top-k-frequent.js`)
- [ ] **17-4** 🔁 **復習: 17-1〜17-3** — 時間制限付きで再実装 (`review-medium-arr.js`)
- [ ] **17-5a** Longest Palindromic Substring (#5) — 問題理解 & アプローチ検討 (`longest-palindrome-plan.js`)
- [ ] **17-5b** Longest Palindromic Substring (#5) — 実装 & テスト (`longest-palindrome.js`)

### Step 18: Medium 実践（木・連結リスト・スタック）

**目標**: 木・連結リスト・スタック を使った Medium 問題を自力で解く

- [ ] **18-1a** Binary Tree Level Order Traversal (#102) — 問題理解 & アプローチ検討 (`level-order-plan.js`)
- [ ] **18-1b** Binary Tree Level Order Traversal (#102) — 実装 & テスト (`level-order.js`)
- [ ] **18-2a** Validate Binary Search Tree (#98) — 問題理解 & アプローチ検討 (`validate-bst-plan.js`)
- [ ] **18-2b** Validate Binary Search Tree (#98) — 実装 & テスト (`validate-bst.js`)
- [ ] **18-3** Add Two Numbers (#2) — Linked List Medium (`add-two-numbers.js`)
- [ ] **18-4** Evaluate Reverse Polish Notation (#150) — Stack Medium (`eval-rpn.js`)
- [ ] **18-5** Kth Smallest Element in a BST (#230) — Tree Medium (`kth-smallest-bst.js`)
- [ ] **18-6** 🔁 **復習: Step 15〜18** — Medium パターン混合問題5問 (`review-medium-mixed.js`)

---

## Phase 5: Medium 演習 + パターン定着 (Step 19〜24)

> より高度なアルゴリズムを学び、Medium を安定して解ける実力を身につける

### Step 19: DP 応用

**目標**: 2D DP やより複雑な DP パターンを習得する

- [ ] **19-1** 2D DP の考え方 — グリッド上の DP (`dp-2d-concept.js`)
- [ ] **19-2** Unique Paths (#62) — Medium (`unique-paths.js`)
- [ ] **19-3** Minimum Path Sum (#64) — Medium (`min-path-sum.js`)
- [ ] **19-4** Longest Common Subsequence (#1143) — Medium (`lcs.js`)
- [ ] **19-5** Edit Distance (#72) — Medium (`edit-distance.js`)
- [ ] **19-6** 0/1 ナップサック問題 — DP の典型パターン (`knapsack.js`)
- [ ] **19-7** Word Break (#139) — Medium (`word-break.js`)
- [ ] **19-8** 🔁 **復習: DP 全体 (Step 16+19)** (`review-dp-all.js`)
- [ ] **19-9** 練習: Partition Equal Subset Sum (#416) — Medium (`practice-partition-subset.js`)
- [ ] **19-10** 練習: Target Sum (#494) — Medium (`practice-target-sum.js`)

### Step 20: グラフ (Graph)

**目標**: グラフの表現方法と探索アルゴリズムを理解し、グラフ問題を解けるようになる

- [ ] **20-1** グラフの概念 — 頂点、辺、有向/無向 (`graph-concept.js`)
- [ ] **20-2** グラフの表現 — 隣接リストと隣接行列 (`graph-representation.js`)
- [ ] **20-3** グラフの BFS — 幅優先探索の実装 (`graph-bfs.js`)
- [ ] **20-4** グラフの DFS — 深さ優先探索の実装 (`graph-dfs.js`)
- [ ] **20-5** Number of Islands (#200) — Medium (`number-of-islands.js`)
- [ ] **20-6** Clone Graph (#133) — Medium (`clone-graph.js`)
- [ ] **20-7** Course Schedule (#207) — Medium: トポロジカルソート (`course-schedule.js`)
- [ ] **20-8** Pacific Atlantic Water Flow (#417) — Medium (`pacific-atlantic.js`)
- [ ] **20-9** 重み付きグラフと最短経路の考え方 — Dijkstra の原理を学ぶ (`graph-shortest-path-concept.js`)
- [ ] **20-10** Dijkstra のアルゴリズム — 優先度キューを使った最短経路の実装 (`graph-dijkstra.js`)
- [ ] **20-11** Network Delay Time (#743) — Medium: Dijkstra で実装 (`network-delay-time.js`)
- [ ] **20-12** 🔁 **復習: グラフパターン** (`review-graph.js`)
- [ ] **20-13** 練習: Cheapest Flights Within K Stops (#787) — Medium (`practice-cheapest-flights.js`)

### Step 21: バックトラッキング (Backtracking)

**目標**: バックトラッキングの考え方を理解し、探索・列挙問題を解けるようになる

- [ ] **21-1** バックトラッキングの考え方 — 選択・探索・戻しの3ステップ (`bt-concept.js`)
- [ ] **21-2** Subsets (#78) — Medium: 全部分集合の列挙 (`subsets.js`)
- [ ] **21-3** Permutations (#46) — Medium: 全順列の列挙 (`permutations.js`)
- [ ] **21-4** Combination Sum (#39) — Medium (`combination-sum.js`)
- [ ] **21-5** Letter Combinations of a Phone Number (#17) — Medium (`phone-combinations.js`)
- [ ] **21-6** Word Search (#79) — Medium: グリッド上のバックトラッキング (`word-search.js`)
- [ ] **21-7** 🔁 **復習: バックトラッキングパターン** (`review-backtracking.js`)
- [ ] **21-8** 練習: Generate Parentheses (#22) — Medium (`practice-generate-parens.js`)

### Step 22: ヒープ・優先度キュー (Heap / Priority Queue)

**目標**: ヒープの仕組みを理解し、Top-K 系問題を解けるようになる

- [ ] **22-1** ヒープの概念 — 完全二分木と heap property (`heap-concept.js`)
- [ ] **22-2** Min Heap の実装 — push, pop, peek (`heap-implement.js`)
- [ ] **22-3** Kth Largest Element in an Array (#215) — Medium (`kth-largest.js`)
- [ ] **22-4** Find K Pairs with Smallest Sums (#373) — Medium (`k-pairs-smallest-sums.js`)
- [ ] **22-5** Task Scheduler (#621) — Medium (`task-scheduler.js`)
- [ ] **22-6** 🔁 **復習: ヒープパターン** (`review-heap.js`)
- [ ] **22-7** 練習: K Closest Points to Origin (#973) — Medium (`practice-k-closest.js`)
- [ ] **22-8** 練習: Reorganize String (#767) — Medium (`practice-reorganize-string.js`)

### Step 23: Medium 総合演習

**目標**: 複数パターンを組み合わせた Medium 問題に挑戦し、パターン認識力を鍛える

- [ ] **23-1** Rotate Image (#48) — 配列操作 Medium (`rotate-image.js`)
- [ ] **23-2** Spiral Matrix (#54) — 配列操作 Medium (`spiral-matrix.js`)
- [ ] **23-3** Set Matrix Zeroes (#73) — Medium (`set-matrix-zeroes.js`)
- [ ] **23-4** Merge Intervals (#56) — Interval 系 Medium (`merge-intervals.js`)
- [ ] **23-5** Insert Interval (#57) — Interval 系 Medium (`insert-interval.js`)
- [ ] **23-6** Search in Rotated Sorted Array (#33) — Binary Search 応用 Medium (`search-rotated.js`)
- [ ] **23-7** Find Minimum in Rotated Sorted Array (#153) — Binary Search 応用 Medium (`find-min-rotated.js`)
- [ ] **23-8** 🔁 **復習: Step 19〜23** — パターン別に整理 + 5問を再実装 (`review-medium-advanced.js`)
- [ ] **23-9** 練習: LRU Cache (#146) — Medium (`practice-lru-cache.js`)
- [ ] **23-10** 練習: Design Add and Search Words (#211) — Medium (`practice-word-dict.js`)

### Step 24: 総復習・Mock Interview

**目標**: 全パターンを網羅的に振り返り、Medium を安定して解ける力を確認する

- [ ] **24-1** パターン整理 — 全パターンのチートシートを作成 (`pattern-cheatsheet.js`)
- [ ] **24-2** Mock 1: 配列 + HashMap 系 — 制限時間30分で1問 (`mock-array-hashmap.js`)
- [ ] **24-3** Mock 2: Two Pointers + Sliding Window 系 — 制限時間30分で1問 (`mock-tp-sw.js`)
- [ ] **24-4** Mock 3: DP 系 — 制限時間35分で1問 (`mock-dp.js`)
- [ ] **24-5** Mock 4: Tree + Graph 系 — 制限時間35分で1問 (`mock-tree-graph.js`)
- [ ] **24-6** Mock 5: Backtracking + Heap 系 — 制限時間35分で1問 (`mock-bt-heap.js`)
- [ ] **24-7** 弱点分析 — Mock の結果を振り返り、弱いパターンを特定 (`weakness-analysis.js`)
- [ ] **24-8** 弱点補強 — 弱いパターンの追加練習 (`reinforce.js`)
- [ ] **24-9** 🔁 **最終復習: 全 Phase** — ランダム5問を時間制限付きで解く (`review-final-all.js`)

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
