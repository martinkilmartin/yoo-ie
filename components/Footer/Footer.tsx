import { Link } from '../Link'
import { Copyright } from '../Copyright'

type Props = {
  links?: string[]
  brand: string
}

const Footer = ({ links, brand }: Props): JSX.Element => (
  <footer className="w-full max-w-screen-xl px-4 py-8 mx-auto bg-neutral text-neutral-content rounded-box">
    {links && (
      <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
        {links.map((link, index) => (
          <Link text={link} key={`${link.substring(0, 4)}_${index}`} />
        ))}
      </ul>
    )}
    <Copyright brand={brand} />
  </footer>
)

export default Footer
