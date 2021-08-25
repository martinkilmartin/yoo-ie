import { GetStaticProps } from 'next'

import { CSSTheme } from '../types'

import { CSS_THEMES } from '../constants/cssThemes'

import heroBGImage from '../public/img/bg/simple-software-solutions-2844x1600.jpg'

import { Container } from '../layout/Container'
import { HTMLHead } from '../components/HTMLHead'
import { Navbar } from '../components/Navbar'
import { SionnachSolutionsLogo } from '../components/SVG'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'

type Props = {
  title: string
  brand: string
  heroTitle: string
  description: string
  cssThemes: CSSTheme[]
}

const Home = ({
  title,
  brand,
  heroTitle,
  description,
  cssThemes,
}: Props): JSX.Element => (
  <Container>
    <HTMLHead title={title} description={description} />
    <Navbar logo={<SionnachSolutionsLogo />} brand={brand} themes={cssThemes} />
    <Hero bgImageData={heroBGImage} heading={heroTitle} codedView={true} />
    <Footer brand={brand} />
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Sionnach Solutions a.k.a. Sionnach Buí'
  const brand = 'Sionnach Solutions'
  const heroTitle = 'Introducing Innovation In Irish Internet Industries'
  const description = 'Introducing Innovation In Irish Internet Industries'
  const cssThemes = CSS_THEMES

  return {
    props: {
      title,
      brand,
      heroTitle,
      description,
      cssThemes,
    },
  }
}

export default Home
