# システムデザイン面接 学習プラン

## 概要

システムデザイン面接に必要な知識をゼロから学び、主要な設計問題を解けるようになるまでのステップバイステップ学習プラン。

各ステップで Claude Code が baby step で進行し、1つずつ理解を確認しながら進める。

### 全体ロードマップ

1ステップ = 約30分〜1時間（説明 + 演習 + レビュー）

| フェーズ | 内容 | ステップ数 | 想定時間 | 状態 |
|---|---|---|---|---|
| Phase 1 | 基礎概念 (Step 1〜5) | 39 | ~20〜39h | 📋 本計画 |
| Phase 2 | 設計スキル (Step 6〜7) | 14 | ~7〜14h | 📋 本計画 |
| Phase 3 | 実践・設計問題 (Step 8〜10) | 30 | ~15〜30h | 📋 本計画 |

> 全計画 = **全83ステップ / 約42〜83時間**（うち🔁復習8回）

### Phase 1〜3 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 1 | ネットワーク・Web基礎 | 8 |
| Step 2 | データベース基礎 | 9 |
| Step 3 | キャッシュ | 7 |
| Step 4 | 非同期処理・メッセージキュー | 7 |
| Step 5 | 分散システムの概念 | 8 |
| Step 6 | 見積もり・API設計 | 8 |
| Step 7 | 面接の進め方 | 6 |
| Step 8 | 基礎設計問題 | 10 |
| Step 9 | 中級設計問題 | 10 |
| Step 10 | 上級設計問題 | 10 |

## 使用ツール

Markdown（アーキテクチャ図はレビュー時に Claude が Mermaid で描く）

## プロジェクト構造

```
leetcode/
├── docs/
│   ├── system-design-plan.md
│   └── system-design-progress.json
├── src/
│   ├── sd-step01-network/
│   ├── sd-step02-database/
│   ├── sd-step03-cache/
│   ├── sd-step04-async/
│   ├── sd-step05-distributed/
│   ├── sd-step06-estimation-api/
│   ├── sd-step07-interview/
│   ├── sd-step08-basic-design/
│   ├── sd-step09-intermediate-design/
│   └── sd-step10-advanced-design/
└── package.json
```

---

## 進捗

### Step 1: ネットワーク・Web基礎

**目標**: Web通信の仕組みとシステム構成要素を理解する

- [ ] **1-1** クライアントサーバーモデルとHTTP — リクエスト/レスポンス、ステータスコード、HTTPメソッド (`http-basics.md`)
- [ ] **1-2** DNS の仕組み — ドメイン名解決のフロー、DNSキャッシュ (`dns.md`)
- [ ] **1-3** TCP と UDP — コネクションの信頼性、ユースケースの違い (`tcp-udp.md`)
- [ ] **1-4** ロードバランサ — トラフィック分散、アルゴリズム（Round Robin, Least Connections等） (`load-balancer.md`)
- [ ] **1-5** リバースプロキシと CDN — 役割の違いと使い所 (`proxy-cdn.md`)
- [ ] **1-6** WebSocket・ポーリング・SSE — リアルタイム通信の選択肢 (`realtime.md`)
- [ ] **1-7** 練習: Webリクエストのライフサイクルを図示して説明 (`practice-request-lifecycle.md`)
- [ ] **1-8** 練習: チャットアプリに適した通信方式を選定・理由を説明 (`practice-realtime-choice.md`)

### Step 2: データベース基礎

**目標**: RDB と NoSQL の特徴、スケーリング手法を理解する

- [ ] **2-1** RDB基礎 — テーブル設計、正規化、主キー・外部キー (`rdb-basics.md`)
- [ ] **2-2** インデックス — B-Treeの仕組み、インデックスの効果と代償 (`index.md`)
- [ ] **2-3** トランザクションと ACID — 原子性、一貫性、分離性、永続性 (`transaction-acid.md`)
- [ ] **2-4** NoSQL概要 — Key-Value, Document, Wide-Column, Graph の特徴 (`nosql-overview.md`)
- [ ] **2-5** SQL vs NoSQL — ユースケース別の使い分け判断基準 (`sql-vs-nosql.md`)
- [ ] **2-6** レプリケーション — Master-Slave, Master-Master、同期/非同期 (`replication.md`)
- [ ] **2-7** パーティショニング/シャーディング — 水平分割の戦略とトレードオフ (`sharding.md`)
- [ ] **2-8** 🔁 **復習: Step 1+2前半** — ネットワーク + DB基礎の混合問題 (`review-network-db.md`)
- [ ] **2-9** 練習: SNSアプリのデータモデル設計 (`practice-sns-schema.md`)

### Step 3: キャッシュ

**目標**: キャッシュの仕組み・戦略・落とし穴を理解する

- [ ] **3-1** キャッシュの概念 — なぜキャッシュが必要か、キャッシュ階層 (`cache-intro.md`)
- [ ] **3-2** キャッシュ戦略 — Cache-aside, Read-through, Write-through, Write-back (`cache-strategies.md`)
- [ ] **3-3** キャッシュ無効化 — TTL, イベント駆動無効化、一貫性の課題 (`cache-invalidation.md`)
- [ ] **3-4** 分散キャッシュ — Redis, Memcached の特徴と使い分け (`distributed-cache.md`)
- [ ] **3-5** キャッシュの落とし穴 — Cache stampede, Thundering herd, Hot key問題 (`cache-pitfalls.md`)
- [ ] **3-6** 練習: Eコマースサイトのキャッシュ設計 (`practice-ecommerce-cache.md`)
- [ ] **3-7** 🔁 **復習: Step 2後半+3** — DB + キャッシュの混合問題 (`review-db-cache.md`)

### Step 4: 非同期処理・メッセージキュー

**目標**: 非同期アーキテクチャとメッセージングの基本を理解する

- [ ] **4-1** 同期 vs 非同期 — いつ非同期にすべきか、メリット・デメリット (`sync-vs-async.md`)
- [ ] **4-2** メッセージキューの基礎 — Producer/Consumer、At-least-once/Exactly-once (`message-queue.md`)
- [ ] **4-3** Pub/Sub モデル — トピックベースの配信、Fan-out パターン (`pub-sub.md`)
- [ ] **4-4** イベント駆動アーキテクチャ — Event Sourcing, CQRS の概要 (`event-driven.md`)
- [ ] **4-5** 練習: ECサイトの注文処理を非同期設計 (`practice-order-async.md`)
- [ ] **4-6** 🔁 **復習: Step 3+4** — キャッシュ + 非同期の混合問題 (`review-cache-async.md`)
- [ ] **4-7** 練習: マルチチャネル通知配信の設計 (`practice-notification.md`)

### Step 5: 分散システムの概念

**目標**: 分散システムの理論的基盤と設計原則を理解する

- [ ] **5-1** CAP定理 — Consistency, Availability, Partition Tolerance のトレードオフ (`cap-theorem.md`)
- [ ] **5-2** 一貫性モデル — Strong, Eventual, Causal consistency の違い (`consistency-models.md`)
- [ ] **5-3** 可用性とフォールトトレランス — SLA/SLO, Circuit breaker, Retry (`availability.md`)
- [ ] **5-4** コンセンサスの基礎 — リーダー選出、レプリカ同期の仕組み (`consensus.md`)
- [ ] **5-5** 分散IDの生成 — UUID, Snowflake, DB sequence の比較 (`distributed-id.md`)
- [ ] **5-6** 練習: サービスごとの CAP 選択を判断 (`practice-cap-choice.md`)
- [ ] **5-7** 🔁 **復習: Step 1-5 総復習** — 基礎概念の総合問題 (`review-fundamentals.md`)
- [ ] **5-8** 練習: 障害シナリオの分析と対策設計 (`practice-failure-analysis.md`)

### Step 6: 見積もり・API設計

**目標**: 規模の見積もり方法とAPI設計の原則を習得する

- [ ] **6-1** 数値感覚 — 2のべき乗、レイテンシ、ストレージ単位の暗記 (`numbers-everyone-should-know.md`)
- [ ] **6-2** Back-of-the-envelope — QPS、ストレージ、帯域の見積もり手法 (`estimation.md`)
- [ ] **6-3** RESTful API 設計 — リソース設計、エンドポイント命名、ページネーション (`rest-api.md`)
- [ ] **6-4** Rate Limiting — Token bucket, Sliding window 等のアルゴリズム (`rate-limiting.md`)
- [ ] **6-5** 認証・認可 — OAuth 2.0, JWT, API Key の使い分け (`auth.md`)
- [ ] **6-6** 練習: Twitter規模のサービスを見積もる (`practice-twitter-estimation.md`)
- [ ] **6-7** 🔁 **復習: Step 5+6** — 分散システム + 見積もり・APIの混合問題 (`review-distributed-api.md`)
- [ ] **6-8** 練習: REST API設計レビュー (`practice-api-review.md`)

### Step 7: 面接の進め方

**目標**: システムデザイン面接の進め方とフレームワークを理解する

- [ ] **7-1** 面接のフレームワーク — 45分の時間配分、各フェーズの目的 (`interview-framework.md`)
- [ ] **7-2** 要件定義 — 機能要件・非機能要件の聞き出し方 (`requirements.md`)
- [ ] **7-3** High-Level Design — コンポーネント図の描き方、データフロー (`high-level-design.md`)
- [ ] **7-4** Deep Dive — ボトルネック特定、スケーリング戦略の議論 (`deep-dive.md`)
- [ ] **7-5** まとめと振り返り — 設計の要約、改善点の提示 (`wrap-up.md`)
- [ ] **7-6** 練習: チャットアプリの模擬要件定義 (`practice-mock-requirements.md`)

### Step 8: 基礎設計問題

**目標**: 定番の基礎設計問題を実際に解く

**進め方**: 問題を読む → 要件定義 → 見積もり → High-Level Design → Deep Dive → レビュー

- [ ] **8-1a** URL Shortener — 要件定義 & 見積もり (`url-shortener-plan.md`)
- [ ] **8-1b** URL Shortener — 設計 & Deep Dive (`url-shortener.md`)
- [ ] **8-2a** Paste Bin — 要件定義 & 見積もり (`paste-bin-plan.md`)
- [ ] **8-2b** Paste Bin — 設計 & Deep Dive (`paste-bin.md`)
- [ ] **8-3a** Rate Limiter — 要件定義 & アルゴリズム選定 (`rate-limiter-plan.md`)
- [ ] **8-3b** Rate Limiter — 分散設計 & Deep Dive (`rate-limiter.md`)
- [ ] **8-4** 🔁 **復習: 8-1〜8-3** — 3問の設計を振り返り、1問を再設計 (`review-basic-design.md`)
- [ ] **8-5a** Key-Value Store — 要件定義 & 見積もり (`kv-store-plan.md`)
- [ ] **8-5b** Key-Value Store — 設計 & Deep Dive (`kv-store.md`)
- [ ] **8-6** 練習: 基礎設計問題のトレードオフ比較 (`practice-tradeoff-comparison.md`)

### Step 9: 中級設計問題

**目標**: より複雑な設計問題に挑戦する

- [ ] **9-1a** SNSフィード (Twitter) — 要件定義 & 見積もり (`sns-feed-plan.md`)
- [ ] **9-1b** SNSフィード (Twitter) — Fan-out 設計 & Deep Dive (`sns-feed.md`)
- [ ] **9-2a** チャットシステム (Slack) — 要件定義 & 見積もり (`chat-system-plan.md`)
- [ ] **9-2b** チャットシステム (Slack) — WebSocket 設計 & Deep Dive (`chat-system.md`)
- [ ] **9-3a** Web Crawler — 要件定義 & 見積もり (`web-crawler-plan.md`)
- [ ] **9-3b** Web Crawler — 分散クロール設計 & Deep Dive (`web-crawler.md`)
- [ ] **9-4** 🔁 **復習: Step 8+9前半** — 設計パターンの振り返り (`review-intermediate.md`)
- [ ] **9-5a** 通知システム — 要件定義 & 見積もり (`notification-system-plan.md`)
- [ ] **9-5b** 通知システム — マルチチャネル設計 & Deep Dive (`notification-system.md`)
- [ ] **9-6** 練習: 既存設計の改善提案 (`practice-design-improvement.md`)

### Step 10: 上級設計問題

**目標**: 面接で頻出の高難度問題を解く

- [ ] **10-1a** 動画配信 (YouTube) — 要件定義 & 見積もり (`video-streaming-plan.md`)
- [ ] **10-1b** 動画配信 (YouTube) — アップロード・配信設計 & Deep Dive (`video-streaming.md`)
- [ ] **10-2a** ファイル同期 (Google Drive) — 要件定義 & 見積もり (`file-sync-plan.md`)
- [ ] **10-2b** ファイル同期 (Google Drive) — 同期・競合解決設計 & Deep Dive (`file-sync.md`)
- [ ] **10-3a** 検索オートコンプリート — 要件定義 & 見積もり (`autocomplete-plan.md`)
- [ ] **10-3b** 検索オートコンプリート — Trie 設計 & Deep Dive (`autocomplete.md`)
- [ ] **10-4** 🔁 **復習: Step 9+10前半** — 設計問題の振り返り (`review-advanced.md`)
- [ ] **10-5a** 近隣検索 (Yelp) — 要件定義 & 見積もり (`nearby-search-plan.md`)
- [ ] **10-5b** 近隣検索 (Yelp) — 地理インデックス設計 & Deep Dive (`nearby-search.md`)
- [ ] **10-6** 🔁 **最終復習** — 全設計問題の振り返りとパターン整理 (`review-final.md`)

---

## 各ステップの進め方（共通）

1. **Claude Code がレッスンまたはテンプレートを生成**
   - 概念の説明（レッスン形式）
   - 設計演習テンプレート（Markdown）
   - `<!-- TODO -->` マーカー

2. **ユーザーが設計を記述**
   - テンプレートの TODO 部分を埋める
   - 構成要素やデータの流れをテキストで記述する
   - トレードオフや判断理由を記述する

3. **Claude Code がレビュー**
   - 設計の完成度と正確性を評価
   - 改善点のフィードバック
   - 別のアプローチや実際のサービスでの事例紹介

4. **次のステップへ進む**

---

## セットアップ

特別なセットアップは不要。Markdown ファイルを作成して記述するだけ。

---

## 始め方

> 「/system-design-next」と Claude Code に伝えるだけでOK。
> Claude Code がテンプレートを作成し、ガイドします。
