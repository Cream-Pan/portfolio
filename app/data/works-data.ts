export type ProjectDetail = {
  title: string;
  description: string[];
  techStack: string[];
  imagePath?: string;
  demoUrl?: string;
  videoPath?: string;
  look: string;
  githubUrl?: string;
  category: string;
};

export const projects: Record<string, ProjectDetail> = {
  "rubiks-cube": {
    title: "ルービックキューブサイト",
    description: [
      "ルービックキューブの歴史，論理的思考力への効果，および解法の解説を目的とした総合的なWebアプリケーションである．初心者が体系的に学習できるだけでなく，中上級者が日々のトレーニングに活用できる実用的なツールの提供を目指した．",
      "技術的な工夫として，JavaScriptを用いた競技用タイマー機能を実装した．スペースキーによる計測の開始・停止に加え，競技規則に則ったスクランブル（手順）のランダム生成ロジックを構築した．また，Cookieを活用した学習達成度の保存機能を導入し，ユーザーが自身の進捗を視覚的に把握できる仕組みを整えた．",
      "UI/UXの面では，Swiper.jsを用いた直感的なスライダー実装や，CSSによるドロップダウンメニューの構築を行い，情報量の多いサイト内での高い回遊性を実現した．さらに，レスポンシブデザインに対応させ，PC・スマートフォンの双方から快適に利用できるよう設計した．",
      "この制作を通じて，動的なDOM操作や非同期処理に加え，ユーザーの利便性を考慮したフロントエンド設計の基礎を習得した．"
    ],
    techStack: ["HTML5 / CSS3(Responsive Design)", "JavaScript", "Cookie", "Netlify"],
    imagePath: "/images/rubiks-main.png",
    demoUrl: "https://rubik-s.netlify.app/",
    look: "▶ 作品を見る",
    category: "Web Application",
  },
  "maze-game": {
    title: "迷路自動生成3Dアクションゲーム",
    description: [
      "Unityを用いて開発した，動的に生成される迷路を攻略する3Dアクションゲームである．プレイヤーの操作性と，リプレイ性を高めるためのランダム要素の共存を目的として制作した．",
      "技術的な核心として，『穴掘り法』アルゴリズムに基づいた迷路の自動生成ロジックを独自に実装した．全領域を壁として初期化した後，奇数座標を起点に再帰的な探索を行うことで，必ずゴールに到達可能な迷路を動的に生成する仕組みを構築した．",
      "ゲームプレイの質を向上させるため，ユーザーのスキルに応じた柔軟な難易度設定を実現するため，ゲーム開始前に『移動速度』および『制限時間』を選択可能なシステムを導入した．",
      "さらに，Animatorと連携した移動制御を行い，カメラの追従と注視点固定を実装することで，快適な視点操作を実現した．また，障害物との接触時には，IEnumerator（コルーチン）を用いた時間差による制御処理を導入し，ゲーム性に奥行きを持たせた．",
      "この制作を通じて，C#によるアルゴリズムの実装能力，およびUnityのコンポーネント指向に基づいた効率的なシステム設計手法を習得した．"
    ],
    techStack: ["Unity", "C#", "TextMeshPro (UI)", "Netlify"],
    imagePath: "/images/maze-main.png",
    demoUrl: "https://maze-eat.netlify.app/",
    look: "▶ ゲームを体験する",
    category: "Game Development",
  },
  "escape-game": {
    title: "Android向け2D脱出ゲーム：Illustration Room",
    description: [
      "Unityを用いて開発したAndroid向けの2D脱出ゲームアプリである．Google Playストアにて一般公開を行っており，設計から実装，リリースまでの一連の開発工程を単独で完遂した．",
      "技術的な核心として，大規模な条件分岐を伴うフラグ管理システムの効率化を挙げることができる．20種類以上のアイテム所持状態およびイベント進捗を管理し，Raycastを用いたオブジェクト検知と連動させることで，一貫性のある謎解きロジックを構築した．また，実行時にランダムな数値を生成してパスワードに割り当てる機能を実装し，プレイごとの変化を設けている．",
      "本制作を通じて，複雑な状態遷移を破綻なく制御するためのアーキテクチャ設計手法を習得した．"
    ],
    techStack: ["Unity", "C#", "TextMeshPro (UI)", "Google Play"],
    imagePath: "/images/escape-main.png",
    demoUrl: "https://play.google.com/store/apps/details?id=com.creampan.illustrationroom",
    look: "▶ Google Playで開く",
    category: "Mobile Application",
  },
  "typing-game": {
    title: "タイピングゲーム",
    description: [
      "Unityを用いて開発した，PC向けのローマ字タイピング練習アプリケーションである．初学者から上級者まで幅広いユーザーの学習を支援するため，3段階の難易度設定および視覚的なフィードバック機能を実装した．",
      "技術的な核心として，外部CSVファイルからの動的な問題読み込みシステムを構築した．System.IOを用いたファイルストリーム処理により，プログラム本体を修正することなく問題データの追加・変更を可能にし，教材としての高い拡張性を実現した．また，入力判定においては，『し』を『shi』または『si』と入力する場合など，複数のローマ字表記パターンを動的に生成・照合するアルゴリズムを実装し，ユーザーの入力習慣を妨げない柔軟な判定ロジックを確立した．",
      "UI/UXの面では，オブジェクトのスムーズな移動演出や，状況に応じた効果音の制御を行い，操作時の爽快感を追求した．さらに，リザルト画面において正確率やタイピング速度を提示することで，学習者が自身の習熟度を客観的に把握できる仕組みを整えた．",
      "本制作を通じて，効率的なデータ管理手法（データとロジックの分離）に加え，ユーザーの多様な操作を許容するための複雑な文字列処理アルゴリズムの設計能力を習得した．"
    ],
    techStack: ["Unity", "C#", "TextMeshPro (UI)"],
    imagePath: "/images/menda-main.png",
    demoUrl: "https://men-da.netlify.app/",
    look: "▶ 作品を体験する",
    category: "Web Application",
  },
  "sichi2025": {
    title: "DistrActive：意識的な非集中状態の観測システムの提案",
    description: [
      "SICHI 2025において企業賞を受賞した，作業中の『意識的な非集中状態（ディストラクション）』を定量的に観測・支援するシステムの提案である．",
      "本研究では，生体センサを用いてユーザーが意図的に集中を解いている状態を検出し，その状態が創造性や精神的疲労に与える影響を観測する手法を構築した．",
      "単なる作業効率の追求に留まらず，人間の柔軟な思考を助けるための『非集中』の価値を再定義した点が評価された．"
    ],
    techStack: ["Unity", "C#", "TextMeshPro (UI)", "Python", "Bio-sensing", "Signal Processing", "Meta Quest 3"],
    videoPath: "/movie/sichi2025_demo.mp4", 
    demoUrl: "https://sites.google.com/view/sichi",
    look: "▶ 表彰ページを見る",
    category: "Contest Exhibit",
  },
  "sichi2024": {
    title: "EchoKey：ヒアラブルデバイスの耳音響認証を利用した穴形状識別による様々なアプリケーションの提案",
    description: [
      "SICHI 2024にて最優秀賞を受賞した，ヒアラブルデバイスの音響特性を活用した新しい入力デバイスの提案である．",
      "耳音響認証技術を応用し，耳穴内部の微細な形状の差異を音の反響特性によって識別する手法を開発した．これにより，個人認証と同時に物理的な穴形状を鍵（キー）としたデバイス操作を可能にしている．",
      "動画では，穴を用いた選択式クイズや物理ダイヤル金庫の解錠など，物理世界とデジタル情報を繋ぐアプリケーションの実装例を示している．"
    ],
    techStack: ["Acoustic Sensing", "Hearable Device", "UX Design"],
    videoPath: "https://www.youtube.com/embed/YJVtM-0OyHY",
    demoUrl: "https://sites.google.com/view/sichi/sichi2024",
    look: "▶ 表彰ページを見る",
    category: "Contest Grand Prize",
  },
};