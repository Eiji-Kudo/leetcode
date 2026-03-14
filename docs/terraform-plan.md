# Terraform 学習プラン

## 概要

Terraform（HashiCorp）をゼロから学び、実務レベルのインフラ構成管理ができるようになるまでのステップバイステップ学習プラン。

各ステップで Claude Code が baby step で進行し、1つずつ理解を確認しながら進める。

### 全体ロードマップ

1ステップ = 約30分〜1時間（説明 + 演習 + レビュー）

| フェーズ | 内容 | ステップ数 | 想定時間 | 状態 |
|---|---|---|---|---|
| Phase 1 | 基礎 (Step 1〜3) | 27 | ~14〜27h | 📋 本計画 |
| Phase 2 | 中級 (Step 4〜6) | 25 | ~13〜25h | 📋 本計画 |
| Phase 3 | 実践 (Step 7〜9) | 26 | ~13〜26h | 📋 本計画 |

> 全計画 = **全78ステップ / 約40〜78時間**（うち🔁復習8回）

### Phase 1〜3 章別内訳

| 章 | テーマ | ステップ数 |
|---|---|---|
| Step 1 | IaC概念・HCL基礎 | 9 |
| Step 2 | リソース管理 | 9 |
| Step 3 | 変数・出力・データソース | 9 |
| Step 4 | State管理 | 8 |
| Step 5 | モジュール設計 | 9 |
| Step 6 | 環境分離・ワークスペース | 8 |
| Step 7 | 実践：AWS基礎構成 | 9 |
| Step 8 | 実践：中級構成パターン | 9 |
| Step 9 | 運用・CI/CD・ベストプラクティス | 8 |

## 実行環境

- Terraform CLI（v1.5+）
- Docker Desktop（ローカル演習用。docker providerで実際にリソースを作成・確認できる）
- AWS Free Tier（Phase 3 の実践演習で使用。必須ではなく `terraform plan` のみでも学習可能）

```bash
# macOS
brew install terraform
# バージョン確認
terraform version
```

## プロジェクト構造

```
leetcode/
├── docs/
│   ├── terraform-plan.md
│   └── terraform-progress.json
├── src/
│   ├── tf-step01-basics/
│   ├── tf-step02-resources/
│   ├── tf-step03-variables/
│   ├── tf-step04-state/
│   ├── tf-step05-modules/
│   ├── tf-step06-workspaces/
│   ├── tf-step07-aws-basic/
│   ├── tf-step08-patterns/
│   └── tf-step09-operations/
└── package.json
```

---

## 進捗

### Step 1: IaC概念・HCL基礎

**目標**: Infrastructure as Codeの概念とHCL（HashiCorp Configuration Language）の基本構文を理解する

- [ ] **1-1** IaCとは何か — 手動構築との比較、宣言的 vs 命令的、Terraformの位置づけ (`iac-intro.md`)
- [ ] **1-2** Terraformの仕組み — Provider/Resource/State の3要素、実行フロー（init→plan→apply→destroy） (`terraform-overview.md`)
- [ ] **1-3** HCL基礎構文 — ブロック、属性、型（string, number, bool, list, map） (`hcl-syntax.md`)
- [ ] **1-4** 最初のTerraformファイル — local provider で `local_file` リソースを作成する (`first-tf/main.tf`)
- [ ] **1-5** terraform init / plan / apply — 各コマンドの役割と出力の読み方 (`tf-commands.md`)
- [ ] **1-6** terraform destroy — リソースの削除とライフサイクル (`tf-destroy.md`)
- [ ] **1-7** .terraform ディレクトリと .terraform.lock.hcl — 依存管理の仕組み (`tf-internals.md`)
- [ ] **1-8** 練習: 複数の local_file を作成・更新・削除するサイクルを体験 (`practice-local-file/main.tf`)
- [ ] **1-9** 練習: terraform plan の出力を読み解く問題 (`practice-plan-reading.md`)

### Step 2: リソース管理

**目標**: リソースの定義、依存関係、ライフサイクルを理解する

- [ ] **2-1** resource ブロックの詳細 — リソースタイプ、名前、属性、メタ引数 (`resource-basics.md`)
- [ ] **2-2** Docker Provider 入門 — docker_image, docker_container の基本 (`docker-intro/main.tf`)
- [ ] **2-3** リソースの依存関係 — 暗黙的依存と depends_on による明示的依存 (`dependencies.md`)
- [ ] **2-4** リソースの更新 — in-place update と recreate の違い、force replacement (`resource-update.md`)
- [ ] **2-5** lifecycle ブロック — create_before_destroy, prevent_destroy, ignore_changes (`lifecycle.md`)
- [ ] **2-6** provisioner — local-exec, remote-exec（非推奨だが理解は必要） (`provisioner.md`)
- [ ] **2-7** 🔁 **復習: Step 1+2** — IaC概念 + リソース管理の混合問題 (`review-basics-resources.md`)
- [ ] **2-8** 練習: Docker で Nginx コンテナを構成管理する (`practice-nginx/main.tf`)
- [ ] **2-9** 練習: リソースの依存関係を図示して説明する (`practice-dependency-diagram.md`)

### Step 3: 変数・出力・データソース

**目標**: 設定の外部化、値の出力、既存リソースの参照方法を理解する

- [ ] **3-1** variable ブロック — type, default, description, validation (`variables-intro.md`)
- [ ] **3-2** 変数の渡し方 — tfvars ファイル、環境変数、CLI引数、優先順位 (`variable-precedence.md`)
- [ ] **3-3** output ブロック — 値の出力、sensitive フラグ、モジュール間連携での役割 (`outputs.md`)
- [ ] **3-4** locals ブロック — 中間値の定義、式の再利用 (`locals.md`)
- [ ] **3-5** data source — 既存リソースの参照、data vs resource の違い (`data-sources.md`)
- [ ] **3-6** 組み込み関数 — 文字列操作、コレクション操作、型変換の主要関数 (`built-in-functions.md`)
- [ ] **3-7** 条件式と繰り返し — count, for_each, dynamic ブロック、条件演算子 (`iteration.md`)
- [ ] **3-8** 🔁 **復習: Step 2+3** — リソース + 変数・出力の混合問題 (`review-resources-variables.md`)
- [ ] **3-9** 練習: 変数で設定可能な Docker 構成を作る (`practice-configurable-docker/`)

### Step 4: State管理

**目標**: Terraform Stateの仕組みと安全な管理方法を理解する

- [ ] **4-1** State とは — terraform.tfstate の構造、なぜ State が必要か (`state-intro.md`)
- [ ] **4-2** State の確認と操作 — terraform show, state list, state show (`state-commands.md`)
- [ ] **4-3** Remote State — S3 + DynamoDB バックエンド（設定と利点） (`remote-state.md`)
- [ ] **4-4** State のロック — 同時実行の防止、ロック解除 (`state-locking.md`)
- [ ] **4-5** terraform import — 既存リソースを State に取り込む (`import.md`)
- [ ] **4-6** terraform state mv / rm — State 操作のユースケースと注意点 (`state-manipulation.md`)
- [ ] **4-7** 🔁 **復習: Step 3+4** — 変数・出力 + State管理の混合問題 (`review-variables-state.md`)
- [ ] **4-8** 練習: State の移行シナリオ（ローカル→リモート）を設計する (`practice-state-migration.md`)

### Step 5: モジュール設計

**目標**: 再利用可能なモジュールの設計と利用方法を習得する

- [ ] **5-1** モジュールの概念 — root module vs child module、なぜモジュール化するか (`module-intro.md`)
- [ ] **5-2** モジュールの構造 — main.tf, variables.tf, outputs.tf の標準レイアウト (`module-structure.md`)
- [ ] **5-3** モジュールの呼び出し — source, version, 引数の渡し方 (`module-usage.md`)
- [ ] **5-4** モジュール間のデータ受け渡し — output を使った連携パターン (`module-composition.md`)
- [ ] **5-5** 公開モジュールの利用 — Terraform Registry、バージョン固定 (`registry-modules.md`)
- [ ] **5-6** モジュール設計のベストプラクティス — 単一責任、インターフェース設計、ネスト制限 (`module-best-practices.md`)
- [ ] **5-7** 🔁 **復習: Step 4+5** — State + モジュールの混合問題 (`review-state-modules.md`)
- [ ] **5-8** 練習: Docker用のネットワーク+コンテナモジュールを設計する (`practice-docker-module/`)
- [ ] **5-9** 練習: 既存の設定をモジュールにリファクタリングする (`practice-refactor-module.md`)

### Step 6: 環境分離・ワークスペース

**目標**: 複数環境（dev/staging/prod）の管理手法を理解する

- [ ] **6-1** ワークスペース — terraform workspace コマンド、State の分離 (`workspaces.md`)
- [ ] **6-2** ワークスペースの活用 — terraform.workspace を使った条件分岐 (`workspace-usage.md`)
- [ ] **6-3** ディレクトリ構成による環境分離 — environments/ パターン (`directory-separation.md`)
- [ ] **6-4** tfvars による環境分離 — dev.tfvars, prod.tfvars パターン (`tfvars-separation.md`)
- [ ] **6-5** ワークスペース vs ディレクトリ分離 — 使い分けの判断基準 (`workspace-vs-directory.md`)
- [ ] **6-6** 🔁 **復習: Step 5+6** — モジュール + 環境分離の混合問題 (`review-modules-envs.md`)
- [ ] **6-7** 練習: 同一モジュールで dev/prod 環境を構築する設計 (`practice-multi-env/`)
- [ ] **6-8** 🔁 **復習: Step 1-6 総復習** — 基礎〜中級の総合問題 (`review-fundamentals.md`)

### Step 7: 実践：AWS基礎構成

**目標**: AWS の基本リソースを Terraform で構成管理する（plan のみでも可）

- [ ] **7-1** AWS Provider の設定 — 認証設定、リージョン、プロファイル (`aws-provider.md`)
- [ ] **7-2** VPC — VPC, Subnet, Internet Gateway, Route Table の構成 (`aws-vpc/main.tf`)
- [ ] **7-3** Security Group — インバウンド/アウトバウンドルールの定義 (`aws-sg/main.tf`)
- [ ] **7-4** EC2 — インスタンスの起動、AMI選択、user_data (`aws-ec2/main.tf`)
- [ ] **7-5** S3 — バケット作成、バージョニング、ライフサイクルルール (`aws-s3/main.tf`)
- [ ] **7-6** IAM — ユーザー、ロール、ポリシーの管理 (`aws-iam/main.tf`)
- [ ] **7-7** 🔁 **復習: Step 7前半** — VPC + EC2 + S3 の混合問題 (`review-aws-basic.md`)
- [ ] **7-8** 練習: パブリック/プライベートサブネット構成の設計 (`practice-vpc-design/`)
- [ ] **7-9** 練習: EC2 + S3 の構成を変数・モジュールで整理する (`practice-aws-modular/`)

### Step 8: 実践：中級構成パターン

**目標**: 実務で頻出する構成パターンを Terraform で実装する

- [ ] **8-1** ALB — Application Load Balancer + Target Group の構成 (`aws-alb/main.tf`)
- [ ] **8-2** RDS — データベースインスタンスの構成、サブネットグループ (`aws-rds/main.tf`)
- [ ] **8-3** ECS（Fargate） — タスク定義、サービス、クラスター (`aws-ecs/main.tf`)
- [ ] **8-4** Route 53 — DNS レコード管理、ALB との連携 (`aws-route53/main.tf`)
- [ ] **8-5** CloudWatch — アラーム、ログ、メトリクスの設定 (`aws-cloudwatch/main.tf`)
- [ ] **8-6** 🔁 **復習: Step 7+8** — AWS構成パターンの総合問題 (`review-aws-patterns.md`)
- [ ] **8-7** 練習: 3層Webアプリ（ALB + ECS + RDS）の全体設計 (`practice-3tier/`)
- [ ] **8-8** 練習: 既存のAWS構成図から Terraform コードを書く (`practice-diagram-to-tf.md`)
- [ ] **8-9** 練習: セキュリティを考慮した構成レビュー (`practice-security-review.md`)

### Step 9: 運用・CI/CD・ベストプラクティス

**目標**: チーム開発と運用で必要な知識を習得する

- [ ] **9-1** terraform fmt / validate / tflint — コード品質ツール (`code-quality.md`)
- [ ] **9-2** Terraform のテスト — terraform test、Terratest の概要 (`testing.md`)
- [ ] **9-3** CI/CD パイプライン — GitHub Actions で plan/apply を自動化する設計 (`cicd-pipeline.md`)
- [ ] **9-4** Terraform Cloud / Spacelift — マネージドサービスの概要と使い所 (`managed-services.md`)
- [ ] **9-5** セキュリティ — Secrets管理、State内の機密情報、checkov/tfsec (`security.md`)
- [ ] **9-6** 大規模運用のパターン — モノレポ vs マルチレポ、blast radius の制御 (`large-scale.md`)
- [ ] **9-7** 🔁 **最終復習** — 全範囲の総合問題 (`review-final.md`)
- [ ] **9-8** 練習: プロジェクトの Terraform 構成を設計するケーススタディ (`practice-case-study.md`)

---

## 各ステップの進め方（共通）

1. **Claude Code がレッスンまたはテンプレートを生成**
   - 概念の説明（レッスン形式のMarkdown）
   - 実践演習テンプレート（.tf ファイルまたは Markdown）
   - `# TODO:` マーカー

2. **ユーザーが実装**
   - テンプレートの TODO 部分を埋める
   - `terraform init` → `terraform plan` で動作確認
   - 設計判断の理由を記述する

3. **Claude Code がレビュー**
   - 設定の正確性と完成度を評価
   - ベストプラクティスとの比較
   - 別のアプローチや実務での事例紹介

4. **次のステップへ進む**

---

## セットアップ

```bash
# Terraform CLI のインストール
brew install terraform

# Docker Desktop のインストール（Phase 1-2 の演習用）
brew install --cask docker

# AWS CLI のインストール（Phase 3 の演習用、任意）
brew install awscli
```

---

## 始め方

> 「/terraform-next」と Claude Code に伝えるだけでOK。
> Claude Code がテンプレートを作成し、ガイドします。
