type Props = {
  text: string
  href?: string
}

const Link = ({ text, href = '#' }: Props): JSX.Element => (
  <a
    className="transition-colors duration-200 hover:text-accent-focus"
    href={href}
  >
    {text}
  </a>
)

export default Link
