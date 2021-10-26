type Props = {
  title?: string
  placeholder: string
}

const TextArea = ({ title, placeholder }: Props): JSX.Element => (
  <div className="form-control">
    {title && (
      <label className="label">
        <span>{title}</span>
      </label>
    )}
    <textarea
      className="h-24 textarea textarea-bordered textarea-primary"
      placeholder={placeholder}
    ></textarea>
  </div>
)

export default TextArea
