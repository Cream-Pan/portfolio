import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/works-data";

type Props = {
  params: Promise<{ slug: string }>;
};

// YouTubeのURLを埋め込み用に変換するヘルパー関数
const getEmbedUrl = (url: string) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = url.split("v=")[1] || url.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  const isYouTube = project.videoPath?.includes("youtube.com") || project.videoPath?.includes("youtu.be");

  // 該当するデータがない場合は404ページを表示
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24">
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px grow bg-slate-800" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main shrink text-center wrap-break-word leading-tight">{project.title}</h1>
          <div className="h-px grow bg-slate-800 hidden sm:block" />
        </div>

        {/* メイン画 */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video relative">
          {project.videoPath ? (
            isYouTube ? (
              <iframe
                src={getEmbedUrl(project.videoPath)}
                title={project.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={project.videoPath}
                controls
                muted
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              />
            )
          ) : project.imagePath ? (
            <Image 
              src={project.imagePath} 
              alt={project.title} 
              fill 
              className="object-cover" 
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500 text-sm">
              No Media Available
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* <div>
              <h2 className="text-xl font-bold text-emerald-primary mb-4 flex items-center gap-2">
                <span>■</span> 概要
              </h2>
              <div className="text-text-sub leading-relaxed space-y-4">
                {project.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div> */}
            {/* 1. 概要・2. 状況説明 */}
            <div>
              <h2 className="text-xl font-bold text-emerald-primary mb-4 flex items-center gap-2">
                <span>■</span> 概要と背景
              </h2>
              <div className="text-text-sub leading-relaxed space-y-4 text-sm md:text-base">
                <p>{project.content.overview}</p>
                <p>{project.content.context}</p>
                <p>{project.content.background}</p>
              </div>
            </div>

            {/* 4. どのような工夫をしたのか */}
            <div>
              <h2 className="text-xl font-bold text-emerald-primary mb-4 flex items-center gap-2">
                <span>■</span> 技術的な工夫
              </h2>
              <ul className="list-none space-y-3 text-text-sub text-sm md:text-base">
                {project.content.innovation.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-primary font-bold">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. 得られた成果・学んだこと */}
            <div>
              <h2 className="text-xl font-bold text-emerald-primary mb-4 flex items-center gap-2">
                <span>■</span> 成果・学んだこと
              </h2>
              <ul className="list-none space-y-3 text-text-sub text-sm md:text-base">
                {project.content.results.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-primary font-bold">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-primary font-bold hover:underline">{project.look}</a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-primary font-bold hover:underline">GitHub</a>
              )}
            </div>
          </div>

          {/* 右側：使用技術 */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 h-fit">
            <h2 className="text-sm font-bold text-text-main mb-6 tracking-widest uppercase border-b border-slate-700 pb-2">使用言語など</h2>
            <ul className="space-y-3 text-sm text-text-sub font-medium">
              {project.techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex justify-between items-center">
          <Link href="/" className="text-sm text-text-sub hover:text-emerald-primary transition-colors">← Back to Home</Link>
          <span className="text-xs text-slate-600">Category: {project.category}</span>
        </div>
      </section>
    </main>
  );
}