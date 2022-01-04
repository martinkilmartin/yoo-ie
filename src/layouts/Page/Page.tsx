import { ReactNode } from 'react'

import { Container } from '@layouts/Container'
import { HTMLHead } from '@components/HTMLHead'
import { Navbar } from '@layouts/Navbar'
import { YooIELogo } from '@components/SVG'
import { Footer } from '@layouts/Footer'

type Props = {
  title: string
  heading: string
  children: ReactNode
}

const Page = ({ title, heading, children }: Props): JSX.Element => (
  <Container>
    <HTMLHead title={title} description={heading} />
    <Navbar logo={<YooIELogo />} />
    {children}
    <Footer />
  </Container>
)

export default Page
