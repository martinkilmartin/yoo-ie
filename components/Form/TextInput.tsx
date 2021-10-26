type Props = {
  title?: string
  placeholder: string
}

const TextInput = ({ title, placeholder }: Props): JSX.Element => (
  <div className="form-control">
    {title && (
      <label className="label">
        <span>{title}</span>{' '}
      </label>
    )}
    <input
      type="text"
      placeholder={placeholder}
      className="input input-primary input-bordered"
    />
  </div>
)

export default TextInput
