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
  description: string
}

const Home = ({
  baseURL,
  title,
  brand,
  heroCodeLines,
  description,
}: Props): JSX.Element => (
  <Container>
    <HTMLHead
      title={title}
      description={description}
      appName={brand}
      baseURL={baseURL}
    />
    <Navbar logo={<SionnachSolutionsLogo />} brand={brand} />
    <Hero bgImageData={heroBGImage} codeLines={heroCodeLines} />
    <Footer brand={brand} />
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL = 'sionnach.solutions'
  const title = 'Sionnach Solutions a.k.a. Sionnach Buí'
  const brand = 'Sionnach Solutions'
  const heroCodeLines = [
    'Introducing Innovation In',
    'Irish Internet Industries',
  ]
  const description = 'Introducing Innovation In Irish Internet Industries'

  return {
    props: {
      baseURL,
      title,
      brand,
      heroCodeLines,
      description,
    },
  }
}

export default Home
