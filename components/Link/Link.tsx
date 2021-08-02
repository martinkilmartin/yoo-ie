type Props = {
  text: string
  href?: string
}

const Link = ({ text, href = '#' }: Props): JSX.Element => (
  <li className="my-2">
    <a
      className="transition-colors duration-200 hover:text-neutral-focus"
      href={href}
    >
      {text}
    </a>
  </li>
)

export default Link
