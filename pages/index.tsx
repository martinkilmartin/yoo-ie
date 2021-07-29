import { GetStaticProps } from 'next'

import { Container } from '../layout/Container'
import { HTMLHead } from '../components/HTMLHead'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'

type Props = {
  title: string
  brandName: string
  description: string
  heroTitle: string
  heroSpeel: string
  cta: string
}

const Home = ({
  title,
  brandName,
  description,
  heroTitle,
  heroSpeel,
  cta,
}: Props) => (
  <Container>
    <HTMLHead title={title} description={description} />
    <Navbar brand={brandName} />
    <Hero heading={heroTitle} description={heroSpeel} button={cta} />
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const title: string = 'Sionnach Solutions a.k.a. Sionnach Buí'
  const brandName: string = 'Sionnach Solutions a.k.a. Sionnach Buí'
  const description: string =
    'Introducing Innovation In Irish Internet Industries'
  const heroTitle: string =
    'Introducing Innovation In Irish Internet Industries'
  const heroSpeel: string = 'User Interfaces & eCommerce Integrations'
  const cta: string = 'Innovate Now'

  return {
    props: {
      title,
      brandName,
      description,
      heroTitle,
      heroSpeel,
      cta,
    },
  }
}

export default Home
