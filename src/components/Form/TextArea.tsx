type Props = {
  title?: string
  name?: string
  id?: string
  minLength?: number
  maxLength?: number
  placeholder: string
}

const TextArea = ({
  title,
  name,
  minLength = 3,
  maxLength = 10000,
  placeholder,
  id,
}: Props): JSX.Element => (
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
      minLength={minLength}
      maxLength={maxLength}
      required
    ></textarea>
  </div>
)

export default TextArea
