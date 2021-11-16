type Props = {
  title?: string
  type?: string
  name?: string
  id?: string
  placeholder: string
}

const TextInput = ({
  title,
  type = 'text',
  name,
  placeholder,
  id,
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
    />
  </div>
)

export default TextInput
