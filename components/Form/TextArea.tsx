type Props = {
  title?: string
  name?: string
  id?: string
  placeholder: string
}

const TextArea = ({ title, name, placeholder, id }: Props): JSX.Element => (
  <div className="form-control">
    {title && (
      <label className="label">
        <span>{title}</span>
      </label>
    )}
    <textarea
      className="h-24 textarea textarea-bordered textarea-primary"
      placeholder={placeholder}
      name={name}
      id={id}
    ></textarea>
  </div>
)

export default TextArea
