<div id="top"></div>

## 使用技術一覧

<p style="display: inline">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TypeScript-3178C6.svg?logo=typescript&style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Vercel-000000.svg?logo=vercel&style=for-the-badge">
  <img src="https://img.shields.io/badge/-GitHub-181717.svg?logo=github&style=for-the-badge">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [主な機能](#主な機能)
5. [設計における工夫と考察](#設計における工夫と考察)
6. [開発者情報](#開発者情報)

## プロジェクト名

Portfolio

## プロジェクトについて

エンジニアリングにおける自身のアイデンティティを視覚化し，開発実績を効率的に提示することを目的としたポートフォリオサイトです．
単なる実績紹介に留まらず，モダンなフロントエンド技術を用いた高いユーザビリティの実現を目指して構築しました．

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 24.12.0|
| Next.js (App Router)  | 16.1.3|
| React                 | 19.2.3|
| TypeScript            | 5.x   |
| Tailwind CSS          | 4.x   |

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成
```
.
├── app/                         # Next.js App Router のルートディレクトリ
│   ├── data/
│   │   └── works-data.ts        # 作品情報を管理するデータ定義ファイル
│   ├── works/
│   │   ├── page.tsx             # 作品一覧ページ
│   │   └── [slug]/
│   │       └── page.tsx         # 作品詳細ページ（動的ルーティング）
│   ├── globals.css              # アプリ全体に適用するグローバルCSS
│   ├── icon.png                 # サイトのファビコン
│   ├── layout.tsx               # 共通レイアウト定義（ヘッダー・メタ情報など）
│   └── page.tsx                 # トップページ
├── .gitignore                   # Gitで追跡しないファイルの設定
├── eslint.config.mjs            # ESLintの設定（コード品質・静的解析）
├── next-env.d.ts                # Next.js用の型定義ファイル
├── next.config.ts               # Next.jsのビルド・挙動に関する設定
├── package.json                 # 依存パッケージおよびスクリプト定義
├── package-lock.json            # 依存パッケージのバージョン固定
├── postcss.config.mjs           # PostCSSの設定（Tailwind等の処理）
├── tailwind.config.ts           # Tailwind CSSのテーマ・ユーティリティ設定
├── tsconfig.json                # TypeScriptのコンパイル設定
└── README.md                    # プロジェクト概要・使用方法の説明

```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 主な機能

### ユーザーインターフェース
* **レスポンシブ対応**: PC，タブレット，スマートフォンの各デバイスにおいて，レイアウトが最適化されるように設計しました．
* **アニメーション**: Framer Motionを利用し，要素のフェードインやホバー効果を付与することで，視認性と操作性を向上させています．

### コンテンツ管理
* **プロジェクト一覧**: 自身の制作物をカード形式で表示し，GitHubリポジトリやライブデモへのリンクを整理しています．
* **スキルセット表示**: 使用可能な言語やフレームワークを視覚的に提示しています．

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発者情報
* **Name**: Takato Ishii
* **Portfolio**: [https://takato-ishii.vercel.app/](https://takato-ishii.vercel.app/)

<p align="right">(<a href="#top">トップへ</a>)</p>