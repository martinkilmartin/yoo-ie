import { DescriptionCard } from './'

type Props = {
  title: string
  paragraphs: {
    title?: string
    content?: string[]
    table?: {
      title: string
      name: string
      purpose: string
    }[]
  }[]
}

const Policy = ({ title, paragraphs }: Props): JSX.Element => (
  <div className="px-4">
    <h2 className="w-full text-3xl font-extrabold leading-9">{title}</h2>
    <div className="flex flex-col mx-auto">
      <dl className="w-full">
        {paragraphs.map((paragraph, i) => (
          <div key={i}>
            {paragraph.title && (
              <dt className="mb-4">
                <h3 className="text-xl font-semibold">{paragraph.title}</h3>
              </dt>
            )}
            {paragraph.content &&
              paragraph.content.map((line, j) => (
                <dd key={j} className="mb-16">
                  <p>{line}</p>
                </dd>
              ))}
            {paragraph.table &&
              paragraph.table.map((description, j) => (
                <DescriptionCard
                  key={j}
                  title={description.title}
                  subtitle={description.name}
                  content={description.purpose}
                />
              ))}
          </div>
        ))}
      </dl>
    </div>
  </div>
)

export default Policy
