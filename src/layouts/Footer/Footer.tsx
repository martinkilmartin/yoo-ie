import { FooterLinks } from '@layouts/Footer'
import { Copyright } from '@components/Copyright'

import { FOOTER_LINKS } from '@constants/FOOTER_LINKS'

const Footer = (): JSX.Element => (
  <footer className="p-10 footer bg-primary text-primary-content footer-center">
    <FooterLinks links={FOOTER_LINKS} />
    <div>
      <Copyright />
    </div>
  </footer>
)

export default Footer
