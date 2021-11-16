import { GetStaticProps } from 'next'

import heroBGImage from '@img/bg/simple-software-solutions-2400w.jpg'

import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Hero } from '@layouts/Hero'

type Props = {
  baseURL: string
  title: string
  brand: string
  heading: string
}

const Home = ({ baseURL, title, brand, heading }: Props): JSX.Element => (
  <Container>
    <Page baseURL={baseURL} title={title} brand={brand} heading={heading}>
      <Hero bgImageData={heroBGImage} heading={heading} />
    </Page>
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
