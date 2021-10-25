import { GetStaticProps } from 'next'

import heroBGImage from '../public/img/bg/simple-software-solutions-2400w.jpg'

import { Container } from '../layout/Container'
import { HTMLHead } from '../components/HTMLHead'
import { Navbar } from '../components/Navbar'
import { SionnachSolutionsLogo } from '../components/SVG'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'

type Props = {
  baseURL: string
  title: string
  brand: string
  heroCodeLines: string[]
  heading: string
}

const Home = ({ baseURL, title, brand, heading }: Props): JSX.Element => (
  <Container>
    <HTMLHead
      title={title}
      description={heading}
      appName={brand}
      baseURL={baseURL}
    />
    <Navbar logo={<SionnachSolutionsLogo />} brand={brand} />
    <Hero bgImageData={heroBGImage} heading={heading} />
    <Footer brand={brand} />
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL = 'sionnach.solutions'
  const title = 'Sionnach Solutions a.k.a. Sionnach Buí'
  const brand = 'Sionnach Solutions'
  const heading = 'Introducing Innovation In Irish Internet Industries'

  return {
    props: {
      baseURL,
      title,
      brand,
      heading,
    },
  }
}

export default Home
