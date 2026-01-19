import Image from "next/image";

/* ===== styles ===== */
const cardStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1.5rem",
};

const techStyle: React.CSSProperties = {
  marginTop: "0.5rem",
  fontSize: "0.9rem",
  color: "#555",
};

type Work = {
  title: string;
  description: string;
  tech: string;
  url?: string;
};

const works: Work[] = [
  {
    title: "🧊 ルービックキューブ関連サイト",
    description: "授業で制作したWebサイト。操作説明や可視化を意識。",
    tech: "HTML / CSS / JavaScript",
    url: "https://rubik-s.netlify.app/",
  },
  {
    title: "🧩 Unity 迷路ゲーム",
    description: "Unity授業で制作。プレイヤー操作とゴール設計。",
    tech: "Unity / C#",
    url: "https://maze-eat.netlify.app/",
  },
  {
    title: "🚪 脱出ゲームアプリ",
    description: "個人制作のスマホ向け脱出ゲーム。",
    tech: "Unity / C#",
    url: "https://play.google.com/store/apps/details?id=com.creampan.illustrationroom&pcampaignid=web_share",
  },
  {
    title: "⌨️ タイピングゲーム",
    description: "コンテストで制作。スコア・難易度設計を担当。",
    tech: "JavaScript",
    url: "https://men-da.netlify.app/",
  },
];

export default function Home() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      
      {/* ===== Hero / Intro ===== */}
      <section style={{ marginBottom: "6rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Takato Ishii
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
          学生エンジニア / アプリ・ゲーム開発
        </p>
        <p style={{ marginTop: "0.5rem", color: "#666" }}>
          研究・授業・個人制作を通して、Web / Unity / モバイルアプリ開発に取り組んでいます。
        </p>
      </section>

      {/* ===== Works ===== */}
      <section style={{ marginBottom: "6rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          Works
        </h2>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          {works.map((work, index) => (
            <div key={index} style={cardStyle}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <p style={techStyle}>{work.tech}</p>

              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  見てみる →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Achievements ===== */}
      <section style={{ marginBottom: "6rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          Achievements
        </h2>

        <ul>
          <li style={{ marginBottom: "1rem" }}>
            🏆 SICHI 学生コンテスト 2025  
            <br />
            最優秀賞・企業賞 受賞
            <br />
            <a
              href="（SICHI 2025 公式受賞者ページURL）"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式受賞者ページ →
            </a>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            🏆 SICHI 学生コンテスト 2024
            <br />
            最優秀賞・企業賞 受賞
            <br />
            <a
              href="https://sites.google.com/view/sichi/sichi2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式受賞者ページ →
            </a>
          </li>

          <li>📜 基本情報技術者試験 合格</li>

          <li>📜 ITパスポート試験 合格</li>
        </ul>
      </section>

      {/* ===== Skills ===== */}
      <section style={{ marginBottom: "6rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          Skills
        </h2>

        <p>
          Frontend：TypeScript / JavaScript / Next.js / HTML / CSS
          <br />
          Game / App：Unity / C#
        </p>

      </section>

      {/* ===== Contact ===== */}
      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          Contact
        </h2>

        <p>
          GitHub・Google Play・外部リンクは順次追加予定
        </p>
      </section>

    </main>
  );
}
