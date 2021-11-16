import { ReactNode } from 'react'

import { Container } from '@layouts/Container'
import { HTMLHead } from '@components/HTMLHead'
import { Navbar } from '@layouts/Navbar'
import { SionnachSolutionsLogo } from '@components/SVG'
import { Footer } from '@layouts/Footer'

type Props = {
  baseURL: string
  title: string
  brand: string
  heading: string
  children: ReactNode
}

const Page = ({
  baseURL,
  title,
  brand,
  heading,
  children,
}: Props): JSX.Element => (
  <Container>
    <HTMLHead
      title={title}
      description={heading}
      appName={brand}
      baseURL={baseURL}
    />
    <Navbar logo={<SionnachSolutionsLogo />} brand={brand} />
    {children}
    <Footer brand={brand} />
  </Container>
)

export default Page
