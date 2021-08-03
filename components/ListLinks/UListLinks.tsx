import { Link } from '../Link'

type Props = {
  links?: string[]
}

const UListLinks = ({ links = [] }: Props): JSX.Element => (
  <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
    {links.map((link, index) => (
      <Link text={link} key={`${link.substring(0, 4)}_${index}`} />
    ))}
  </ul>
)

export default UListLinks
