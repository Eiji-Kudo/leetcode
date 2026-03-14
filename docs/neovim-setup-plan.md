# Neovim セットアップ計画

作成日: 2026-03-14
ステータス: Phase 1-6 完了（初期セットアップ済み）

## ゴール

Neovimをゼロからセットアップし、現在のVSCode/Cursor環境を再現する。
Vimモーダル編集を基本としつつ、慣れ親しんだキーバインドとワークフローを移植する。

## 現状

- Neovim: 未インストール
- 既存設定: なし（クリーンスタート）
- 使用言語: Go, Python, JS/TS, Kotlin, C/C++, Ruby, Terraform, Prisma

## VSCode現環境の分析

### カスタムキーバインド体系

`Cmd+G` をGit/ナビゲーション系、`Cmd+E` をエディタ/diff系、`Cmd+R` を設定系のプレフィックスとしたコード体系。

| VSCode キーバインド | 機能 | Neovimでの再現方法 |
|---|---|---|
| **ナビゲーション（`<leader>g` 系）** | | |
| `Cmd+G Cmd+E` | ファイルエクスプローラー | `<leader>ge` → neo-tree toggle |
| `Cmd+G Cmd+S` | Source Control (SCM) | `<leader>gs` → lazygit / diffview |
| `Cmd+G Cmd+P` | PR Status | `<leader>gp` → octo.nvim PR list |
| `Cmd+G Cmd+I` | GitLens Timeline | `<leader>gi` → diffview file history |
| `Cmd+G Cmd+T` | ターミナルフォーカス | `<leader>gt` → toggleterm focus |
| `Cmd+G Cmd+N` | 新規ターミナル | `<leader>gn` → toggleterm new |
| `Cmd+G Cmd+K` | ターミナル kill | `<leader>gk` → toggleterm kill |
| `Cmd+G Cmd+H` | ファイルパスコピー | `<leader>gh` → copy file path |
| **エディタ/Diff（`<leader>e` 系）** | | |
| `Cmd+E Cmd+E` | Git: ファイルを開く | `<leader>ee` → diffview open file |
| `Cmd+E Cmd+S` | Git: 変更を開く | `<leader>es` → diffview open change |
| **エディタ操作** | | |
| `Cmd+1` | 前のエディタ | `<S-h>` or `[b` → previous buffer |
| `Cmd+2` | 次のエディタ | `<S-l>` or `]b` → next buffer |
| `Shift+Cmd+J` | パネル最大化 | `<leader>z` → zen-mode or maximize |
| `Shift+Cmd+C` | 補助バー トグル | `<leader>a` → sidebar toggle |
| `Shift+Cmd+R` | 最近開いたファイル | `<leader>fr` → telescope oldfiles |
| **設定（`<leader>r` 系）** | | |
| `Cmd+R Cmd+S` | フォーマットなし保存 | `<leader>rs` → `:noa w` |
| `Cmd+R Cmd+I` | Diff表示切替 | `<leader>ri` → diffview toggle |
| **AI操作** | | |
| `Cmd+K` | Inline Chat (Cursor) | `<leader>k` → avante inline edit |
| `Cmd+I` | AI Agent/Edit Session | `<leader>i` → avante chat / agent |
| `Cmd+L` | AI Chat | `<leader>l` → avante ask |

### 主要VSCode拡張 → Neovimプラグイン対応表

| VSCode拡張 | 用途 | Neovimプラグイン |
|---|---|---|
| GitLens | blame, timeline, history | gitsigns.nvim + git-blame.nvim |
| Git Graph | コミットグラフ | lazygit.nvim (TUI内) |
| GitHub Pull Requests | PR管理 | octo.nvim |
| GitLab Workflow | GitLab連携 | fugitive + gitlab.nvim |
| Terraform | HCL補完 | nvim-lspconfig + terraform-ls |
| Prisma | スキーマ補完 | prisma LSP via lspconfig |
| ESLint | Lint | nvim-lint or none-ls.nvim |
| Prettier | フォーマット | conform.nvim |
| Copilot | AI補完 | copilot.lua |
| Cursor AI (Cmd+K/I) | Inline edit / Agent | avante.nvim |

### エディタ設定の移植

| VSCode設定 | Neovim対応 |
|---|---|
| `formatOnSave` (modifications only) | conform.nvim + format on save |
| `foldingImportsByDefault` | treesitter fold + autocmd |
| `diffEditor.renderSideBySide` | diffview.nvim (default side-by-side) |
| `stickyScroll: false` | `vim.o.scrolloff` で代替 |
| `editor.unicodeHighlight: false` | デフォルトで無効 |
| `window.zoomLevel: 2` | ターミナルフォントサイズで調整 |

## セットアップ手順

### Phase 1: インストールと基盤

- [ ] `brew install neovim`
- [ ] `~/.config/nvim/` ディレクトリ構成を作成
- [ ] init.lua を作成（Lua ベースの設定）
- [ ] lazy.nvim（プラグインマネージャー）を導入

### Phase 2: 基本設定とUI

- [ ] 基本オプション設定（行番号、インデント、検索、クリップボード連携、scrolloff等）
- [ ] カラースキーム（Gruvbox系 - VSCodeでMin Gruvboxを使用しているため）
- [ ] neo-tree.nvim（ファイルエクスプローラー）
- [ ] lualine.nvim（ステータスライン）
- [ ] bufferline.nvim（タブライクなバッファ表示）

### Phase 3: キーバインド設定

上記キーバインド対応表に基づき、`<leader>` をスペースキーに設定し、VSCodeのコード体系を再現。

- [ ] `<leader>g` 系: Git/ナビゲーション操作
- [ ] `<leader>e` 系: エディタ/Diff操作
- [ ] `<leader>r` 系: 設定/ユーティリティ
- [ ] `<leader>f` 系: ファイル検索（telescope）
- [ ] `<leader>k/i/l`: AI操作
- [ ] `Cmd+1/2` → `Shift+H/L`: バッファ切り替え
- [ ] toggleterm.nvim のセットアップとキーマップ
- [ ] which-key.nvim（キーバインドヘルプ表示 - プレフィックス入力時に候補表示）

### Phase 4: LSP・補完・フォーマッター

- [ ] mason.nvim（LSPサーバー管理）
- [ ] nvim-lspconfig（LSP設定）
- [ ] nvim-cmp（自動補完）+ LuaSnip
- [ ] 言語サーバー:
  - [ ] gopls（Go）
  - [ ] pyright（Python）
  - [ ] ts_ls（TypeScript/JavaScript）
  - [ ] terraform-ls（Terraform）
  - [ ] kotlin-language-server（Kotlin - `/opt/homebrew/bin/kotlin-lsp` 既存）
  - [ ] clangd（C/C++）
  - [ ] prisma-language-server（Prisma）
  - [ ] lua_ls（Lua - Neovim設定用）
- [ ] conform.nvim（formatOnSave - 変更箇所のみ）
- [ ] nvim-lint（ESLint等のLint連携）
- [ ] LSPキーマップ: `gd`定義, `gr`参照, `K`ホバー, `<leader>ca`コードアクション, `<leader>rn`リネーム

### Phase 5: Git連携（重点）

Git関連拡張を多数使用しているため、ここを手厚く。

- [ ] gitsigns.nvim（行内blame表示、hunkナビゲーション、ステージ）
- [ ] lazygit.nvim（Git Graph, ステージ, コミット, ブランチ操作のTUI）
- [ ] diffview.nvim（Source Control代替 - side-by-side diff, ファイル履歴）
- [ ] octo.nvim（GitHub PR - レビュー, コメント, マージ）
- [ ] git-blame.nvim（GitLens風のインラインblame）

### Phase 6: AI連携

Cursor/Copilot的な体験を再現。

- [ ] copilot.lua（GitHub Copilot - インライン補完）
- [ ] avante.nvim（Cursor風AI操作 - inline edit, chat, agent）
  - `<leader>k` → 選択範囲のインライン編集
  - `<leader>i` → AIエージェント/編集セッション
  - `<leader>l` → AIチャット

### Phase 7: 追加プラグイン

- [ ] treesitter（シンタックスハイライト + コード折りたたみ）
- [ ] autopairs（括弧自動補完）
- [ ] Comment.nvim（コメントトグル - `gcc`/`gc`）
- [ ] telescope.nvim + extensions（ファイル検索, grep, バッファ一覧）
- [ ] indent-blankline.nvim（インデントガイド）

## ディレクトリ構成案

```
~/.config/nvim/
├── init.lua
├── lua/
│   ├── core/
│   │   ├── options.lua
│   │   ├── keymaps.lua
│   │   └── autocmds.lua
│   └── plugins/
│       ├── telescope.lua
│       ├── lsp.lua
│       ├── cmp.lua
│       ├── treesitter.lua
│       ├── neo-tree.lua
│       ├── git.lua
│       ├── ai.lua
│       ├── ui.lua
│       └── editor.lua
└── lazy-lock.json
```

## 備考

- 設定ファイルは `~/.config/nvim/` に配置（このリポジトリ外）
- Phase 1-3 を先に完了させ、基本操作ができる状態にしてからPhase 4以降に進む
- Kotlin LSPは `/opt/homebrew/bin/kotlin-lsp` に既にインストール済み
- VSCodeのActivity Barを非表示にしていることから、ミニマルなUI志向と判断
