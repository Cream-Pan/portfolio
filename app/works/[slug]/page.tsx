type Props = {
  params: { slug: string }
}

export default function WorkDetail({ params }: Props) {
  return (
    <section>
      <h1>Work: {params.slug}</h1>
      <p>ここに詳細を書く</p>
    </section>
  )
}
