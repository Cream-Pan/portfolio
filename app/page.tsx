import Link from "next/link";

type Work = {
  id: string;
  title: string;
  description: string;
  tech: string;
  url?: string;
};

const works: Work[] = [
  {
    id: "rubiks-cube",
    title: "🧊 ルービックキューブサイト",
    description: "ルービックキューブの歴史、論理的思考力への効果、および解法の解説を目的としたWebアプリケーションを開発しました。",
    tech: "HTML / CSS / JavaScript / Cookie / Netlify",
    url: "https://rubik-s.netlify.app/",
  },
  {
    id: "maze-game",
    title: "🧩 迷路自動生成3Dアクションゲーム",
    description: "Unityを用いて、プレイするたびに構造が変化する迷路を攻略する3Dアクションゲームを開発しました。",
    tech: "Unity / C# / Netlify",
    url: "https://maze-eat.netlify.app/",
  },
  {
    id: "escape-game",
    title: "🚪 Android向け2D脱出ゲーム：Illustration Room",
    description: "Android向けの2D脱出ゲームアプリを開発し、Google Playストアにて一般公開を行いました。企画から設計、実装、ストアリリースまでの一連の工程を単独で完遂しました。",
    tech: "Unity / C# / Google Play / AdMob",
    url: "https://play.google.com/store/apps/details?id=com.creampan.illustrationroom",
  },
  {
    id: "typing-game",
    title: "⌨️ タイピングゲーム：麵打",
    description: "「シュルレアリスム」をテーマに、PC向けローマ字タイピング練習アプリをUnityを用いて開発しました。",
    tech: "Unity / C# / Netlify",
    url: "https://men-da.netlify.app/",
  },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["TypeScript","JavaScript", "Next.js", "HTML/CSS", "Flutter", "Dart"]
  },
  {
    title: "Backend",
    skills: ["Python", "C#", "Ruby", "Ruby on Rails(授業で使用)", "MySQL(授業で使用)", "Java(授業で使用)", "C", "R(授業で使用)", "Matlab(授業で使用)"]
  },
  {
    title: "Tools",
    skills: ["Git/GitHub", "VS Code", "Linux", "Android Studio", "Eclipse", "Modelio"]
  },
  {
    title: "Others",
    skills: ["Arduino IDE", "Unity", "Processing(授業で使用)", "KiCad (Rigid/Flex)", "JLCPCB Ordering", "Fusion 360", "Slack", "Notion"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-5xl mx-auto px-6 py-24">
      
      {/* ===== Hero ===== */}
      <section className="mb-10">
        <div className="relative w-30 h-30 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-emerald-primary/20 shadow-lg">
        <img 
          src="/images/boku.jpg" 
          className="object-cover w-full h-full"
          alt="Takato Ishii"
        />
      </div>
      <h1 className="text-4xl font-bold text-text-main tracking-tight">
        Takato Ishii
      </h1>
      <p className="mt-4 text-lg text-emerald-primary font-medium">
        ハードウェア・ソフトウェア開発 / 生体信号解析・ウェアラブルデバイス研究
      </p>
      <div className="mt-6 w-12 h-1 bg-emerald-primary rounded-full" />
      <p className="mt-8 text-text-sub leading-relaxed text-base">
        現在は、<b>CHI分野</b>の<a href="https://x-lab.team/" target="_blank" rel="noopener noreferrer" className="text-text-sub underline underline-offset-4 decoration-emerald-primary/30 hover:text-emerald-primary hover:decoration-emerald-primary transition-all">研究室</a>に所属しており、<b>「人を環境評価のセンサとして位置付ける」</b>というアプローチに基づいた、<b>耳装着型デバイス</b>の研究開発を行っています。<br/>
        鼓膜温度や脈波(PPG)といった微細な生体情報を低負担で連続測定するため、KiCadを用いた<b>基板設計</b>からFusion 360での<b>筐体設計</b>、さらには取得データの機械学習による分析まで、ハードウェアからソフトウェア・データ解析にわたる実装をしています。<br/>
        その他、Unityを用いた3Dゲーム制作やモバイルアプリ開発など、領域に捉われない「ヒトとモノとのつながりの構築」に情熱を注いでいます。
      </p>
    </section>

    {/* ===== Strength (自己PR) ===== */}
    <section id="about" className="mb-10 border-t border-slate-800 pt-13">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-text-main">Strengths</h2>
        <div className="h-px grow bg-slate-800" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-emerald-primary flex items-center gap-2">
           📅 計画的な完遂力
          </h3>
          <p className="text-text-sub leading-relaxed text-base">
            中学生時代の多忙な経験から培った<b>「目標から逆算して行動を最適化する習慣」</b>が私の基盤です。この計画力を活かし、ITパスポートや基本情報技術者試験などの資格も、必要な学習時間を精査して一発合格を続けてきました。研究においても、基板発注の待ち時間をアプリ開発にあてるなど、限られたリソースの中で成果を最大化する動きを大切にしています。
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-emerald-primary flex items-center gap-2">
            🛠️ ハードからソフトまでの実装力
          </h3>
          <p className="text-text-sub leading-relaxed text-base">
            電子回路設計（KiCad）から筐体設計（Fusion 360）、そしてこれらを制御・可視化するソフトウェアまで、領域を横断した開発が可能です。ハードウェア特有の物理的な制約と、ソフトウェアの論理的な仕組み、その両方の視点を持って開発に取り組めることが強みです。
          </p>
        </div>
      </div>
    </section>

    {/* ===== Works ===== */}
    <section id="works" className="mb-10 border-t border-slate-800 pt-13">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-text-main">Works</h2>
        <div className="h-px grow bg-slate-800" />
      </div>

      <div className="grid gap-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="
              group
              border border-slate-800
              rounded-2xl
              p-8
              bg-slate-800/40
              transition-all duration-300 ease-out
              hover:shadow-xl hover:shadow-emerald-900/10
              hover:border-emerald-primary/40
              hover:-translate-y-1
            "
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl font-bold group-hover:text-emerald-primary transition-colors">
                {work.title}
              </h3>
              <span className="text-xs font-mono px-3 py-1 bg-emerald-soft text-emerald-primary rounded-full border border-emerald-primary/20">
                {work.tech}
              </span>
            </div>

            <p className="mt-4 text-text-sub leading-relaxed text-base">
              {work.description}
            </p>

            <div className="flex gap-6 mt-6">
              <Link
                href={`/works/${work.id}`}
                className="text-sm font-bold text-text-main hover:text-emerald-primary transition-colors"
              >
                詳細 →
              </Link>

              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    text-sm font-bold
                    text-emerald-primary
                    hover:text-emerald-400
                    transition-colors
                  "
                >
                  作品を見る
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ===== Achievements ===== */}
    <section id="achievements" className="mb-10 border-t border-slate-800 pt-13">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-text-main">Achievements</h2>
        <div className="h-px grow bg-slate-800" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-800">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            🏆 Contest
          </h3>
          <ul className="space-y-4 text-base text-text-sub">
            <li>
              <span className="block font-medium text-text-main">SICHI 学生コンテスト 2025</span>
              <span className="text-emerald-primary font-bold">企業賞 受賞</span>
              <Link 
                href="/works/sichi2025"
                className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1 mt-1"
              >
                対象作品の詳細 →
              </Link>
            </li>
            <li>
              <span className="block font-medium text-text-main">SICHI 学生コンテスト 2024</span>
              <span className="text-emerald-primary font-bold">最優秀賞 受賞</span><br/>
              <Link 
                href="/works/sichi2024"
                className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1 mt-1"
              >
                対象作品の詳細 →
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-800">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            📜 Certification
          </h3>
          <ul className="space-y-3 text-base text-text-main">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary"></span>
              基本情報技術者試験 合格 (2025年5月)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary"></span>
              ITパスポート試験 合格 (2023年10月)
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* ===== Skills ===== */}
    <section id="skills" className="mb-10 border-t border-slate-800 pt-13">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-text-main">Skills</h2>
        <div className="h-px grow bg-slate-800" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="text-xs font-mono px-3 py-1 bg-emerald-soft text-emerald-primary rounded-full border border-emerald-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ===== Contact ===== */}
    <footer id="contact" className="border-t border-slate-800 pt-13 pb-8 text-center">
      <h2 className="text-xl font-bold text-text-main mb-4">Contact</h2>
      <div className="space-y-2">
        <p className="text-text-sub text-sm">
          メールアドレス
        </p>
        <a 
          href="mailto:aaotktcareer.05561519@gmail.com" 
          className="text-emerald-primary hover:underline font-mono"
        >
          aaotktcareer.05561519@gmail.com
        </a>
      </div>
      <div className="space-y-2">
        <p className="text-text-sub text-sm">
          GitHub
        </p>
        <a 
          href="https://github.com/Cream-Pan"
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-emerald-primary hover:underline font-mono"
        >
          https://github.com/Cream-Pan
        </a>
      </div>
      <p className="mt-12 text-xs text-gray-500">
        © 2026 Takato Ishii. Built with Next.js.
      </p>
    </footer>

    </main>
  );
}