import { ReactNode } from 'react'

import { Container } from '@layouts/Container'
import { HTMLHead } from '@components/HTMLHead'
import { Navbar } from '@layouts/Navbar'
import { SionnachSolutionsLogo } from '@components/SVG'
import { Footer } from '@layouts/Footer'

type Props = {
  title: string
  brand: string
  heading: string
  children: ReactNode
}

const Page = ({ title, brand, heading, children }: Props): JSX.Element => (
  <Container>
    <HTMLHead title={title} description={heading} appName={brand} />
    <Navbar logo={<SionnachSolutionsLogo />} brand={brand} />
    {children}
    <Footer brand={brand} />
  </Container>
)

export default Page
