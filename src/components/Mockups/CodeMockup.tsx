type Props = {
  lines: string[]
}

const CodeMockup = ({ lines }: Props): JSX.Element => (
  <div className="pr-4 mockup-code bg-primary text-primary-content">
    {lines.map((line, index) => (
      <pre key={index}>
        <code>{line}</code>
      </pre>
    ))}
  </div>
)

export default CodeMockup
