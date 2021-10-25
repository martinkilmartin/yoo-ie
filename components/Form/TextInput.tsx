type Props = {
  title?: string
  placeholder: string
}

const TextInput = ({ title, placeholder }: Props): JSX.Element => (
  <div className="form-control">
    <label className="input-group">
      {title && <span>{title}</span>}
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered input-primary text-base-content"
      />
    </label>
  </div>
)

export default TextInput
