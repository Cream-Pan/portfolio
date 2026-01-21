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
    description: "ルービックキューブの歴史から揃え方まで分かるWebサイト．授業制作の一環として開発した．",
    tech: "HTML / CSS / JavaScript",
    url: "https://rubik-s.netlify.app/",
  },
  {
    id: "maze-game",
    title: "🧩 迷路自動生成3Dアクションゲーム",
    description: "プレイヤーの操作性とゴール設計を重視した3Dゲーム．Unity授業にて制作した．",
    tech: "Unity / C#",
    url: "https://maze-eat.netlify.app/",
  },
  {
    id: "escape-game",
    title: "🚪 Android向け2D脱出ゲーム：Illustration Room",
    description: "Unityを用いて開発したAndroid向けの2D脱出ゲームアプリである．Google Playストアにて一般公開を行っており，設計から実装，リリースまでの一連の開発工程を単独で完遂した．",
    tech: "Unity / C#",
    url: "https://play.google.com/store/apps/details?id=com.creampan.illustrationroom",
  },
  {
    id: "typing-game",
    title: "⌨️ タイピングゲーム",
    description: "シュルレアリスムをテーマに，母音と子音を入れ替えたタイピングゲーム．システム設計を実装．",
    tech: "Unity / C#",
    url: "https://men-da.netlify.app/",
  },
];

const heroTechs = [
  "Python", "JavaScript", "HTML/CSS", "Arduino IDE", 
  "Fusion 360", "KiCad"
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
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24">
      
      {/* ===== Hero ===== */}
      <section className="mb-32">
      <h1 className="text-4xl font-bold text-text-main tracking-tight">
        Takato Ishii
      </h1>
      <p className="mt-4 text-lg text-emerald-primary font-medium">
        学生エンジニア / ハードウェア・ソフトウェア開発
      </p>
      <div className="mt-6 w-12 h-1 bg-emerald-primary rounded-full" />
      <p className="mt-8 text-text-sub max-w-2xl leading-relaxed">
        現在は，CHI分野の研究室に所属しており，耳装着型デバイスを用いた生体情報の取得に関する研究を行っています．<br/>
        KiCadによる基板設計からFusion 360での筐体設計，計測データを可視化するWebアプリ構築まで，ハード・ソフトを統合した開発をしています．
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {heroTechs.map((tech) => (
          <span 
            key={tech}
            className="text-xs font-mono px-3 py-1 bg-emerald-soft text-emerald-primary rounded-full border border-emerald-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-8 text-text-sub max-w-2xl leading-relaxed">
        また，Unityを用いたゲーム制作やモバイルアプリ開発など，領域を問わないものづくりも経験しています．
      </p>
    </section>

      {/* ===== Works ===== */}
      <section id="works" className="mb-32 border-t border-slate-800 pt-16">
        <div className="flex items-center gap-4 mb-12">
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

              <p className="mt-4 text-text-sub leading-relaxed">
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
      <section id="achievements" className="mb-32 border-t border-slate-800 pt-16">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-text-main">Achievements</h2>
          <div className="h-px grow bg-slate-800" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-800">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              🏆 Contest
            </h3>
            <ul className="space-y-4 text-sm text-text-sub">
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
            <h3 className="font-bold mb-4 flex items-center gap-2">
              📜 Certification
            </h3>
            <ul className="space-y-3 text-sm text-text-sub">
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
      <section id="skills" className="mb-32 border-t border-slate-800 pt-16">
        <div className="flex items-center gap-4 mb-12">
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
      <footer id="contact" className="border-t border-slate-800 pt-16 pb-8 text-center">
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
        <p className="mt-8 text-text-sub text-sm">
          GitHub のリンクは順次追加予定
        </p>
        <p className="mt-12 text-xs text-gray-500">
          © 2026 Takato Ishii. Built with Next.js.
        </p>
      </footer>

    </main>
  );
}