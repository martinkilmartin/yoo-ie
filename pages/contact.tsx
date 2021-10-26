import { GetStaticProps } from 'next'

import { Container } from '../layout/Container'
import { Page } from '../layout/Page'
import { Contact } from '../layout/Contact'

type Props = {
  baseURL: string
  title: string
  brand: string
  heading: string
}

const Home = ({ baseURL, title, brand, heading }: Props): JSX.Element => (
  <Container>
    <Page baseURL={baseURL} title={title} brand={brand} heading={heading}>
      <Contact />
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
