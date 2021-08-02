import { Link } from '../Link'
import { Copyright } from '../Copyright'

type Props = {
  brand: string
  links?: string[]
}

const Footer = ({ brand, links }: Props): JSX.Element => (
  <footer className="w-full py-8 bg-neutral text-neutral-content rounded-box">
    <div className="max-w-screen-xl px-4 mx-auto">
      {links && (
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          {links.map((link, index) => (
            <Link text={link} key={`${link.substring(0, 4)}_${index}`} />
          ))}
        </ul>
      )}
      <Copyright brand={brand} />
    </div>
  </footer>
)

export default Footer
