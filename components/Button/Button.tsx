type Props = {
  text: StringConstructor
}

const Button = ({ text }: Props) => <button className="btn">{text}</button>

export default Button
