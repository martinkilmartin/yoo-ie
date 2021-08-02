import { GetStaticProps } from 'next'

import { Container } from '../layout/Container'
import { HTMLHead } from '../components/HTMLHead'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'

type Props = {
  title: string
  brand: string
  description: string
  heroTitle: string
  heroSpeel: string
  cta: string
}

const Home = ({
  title,
  brand,
  description,
  heroTitle,
  heroSpeel,
  cta,
}: Props): JSX.Element => (
  <Container>
    <HTMLHead title={title} description={description} />
    <Navbar brand={brand} />
    <Hero heading={heroTitle} description={heroSpeel} button={cta} />
    <Footer brand={brand} />
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Sionnach Solutions a.k.a. Sionnach Buí'
  const brand = 'Sionnach Solutions'
  const description = 'Introducing Innovation In Irish Internet Industries'
  const heroTitle = 'Introducing Innovation In Irish Internet Industries'
  const heroSpeel = 'User Interfaces & eCommerce Integrations'
  const cta = 'Innovate Now'

  return {
    props: {
      title,
      brand,
      description,
      heroTitle,
      heroSpeel,
      cta,
    },
  }
}

export default Home
