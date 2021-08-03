import { Link } from '../Link'

type Props = {
  text: string
  href?: string
}

const ListLink = ({ text, href = '#' }: Props): JSX.Element => (
  <li className="my-2">
    <Link text={text} href={href} />
  </li>
)

export default ListLink
