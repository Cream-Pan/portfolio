type Props = {
  params: { slug: string }
}

export default async function WorkDetail({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24">
    <section>
      <h1 className="text-3xl font-bold text-text-main mb-8">Work: {slug}</h1>
      <div className="prose dark:prose-invert max-w-none text-text-sub leading-relaxed">
          <p>
            このセクションでは，{slug} の開発背景，技術選定，および具体的な実装プロセスについて解説を行う．
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <a href="/" className="text-sm text-emerald-primary hover:underline">
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  )
}
