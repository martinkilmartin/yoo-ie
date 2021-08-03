import { UListLinks } from '../ListLinks'
import { Copyright } from '../Copyright'

type Props = {
  links?: string[]
  brand: string
}

const Footer = ({ links, brand }: Props): JSX.Element => (
  <footer className="w-full max-w-screen-xl px-4 py-8 mx-auto bg-neutral text-neutral-content rounded-box">
    {links && <UListLinks links={links} />}
    <Copyright brand={brand} />
  </footer>
)

export default Footer
