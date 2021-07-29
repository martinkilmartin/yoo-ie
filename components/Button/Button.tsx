type Props = {
  text: string
}

const Button = ({ text }: Props): JSX.Element => (
  <button className="btn">{text}</button>
)

export default Button
