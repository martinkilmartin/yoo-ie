import { FooterLinks } from '@layouts/Footer'
import { Copyright } from '@components/Copyright'

import { FOOTER_LINKS } from '@constants/FOOTER_LINKS'

type Props = {
  brand: string
}

const Footer = ({ brand }: Props): JSX.Element => (
  <footer className="p-10 footer bg-primary text-primary-content footer-center">
    <FooterLinks links={FOOTER_LINKS} />
    <div>
      <Copyright brand={brand} />
    </div>
  </footer>
)

export default Footer
