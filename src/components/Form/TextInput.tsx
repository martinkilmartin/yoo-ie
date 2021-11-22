type Props = {
  title?: string
  type?: string
  name?: string
  id?: string
  minLength?: number
  maxLength?: number
  placeholder: string
}

const TextInput = ({
  title,
  type = 'text',
  name,
  minLength = 1,
  maxLength = 1000,
  id,
  placeholder,
}: Props): JSX.Element => (
  <div className="form-control">
    {title && (
      <label className="label">
        <span>{title}</span>{' '}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className="input input-primary input-bordered"
      name={name}
      id={id}
      minLength={minLength}
      maxLength={maxLength}
      required
    />
  </div>
)

export default TextInput
