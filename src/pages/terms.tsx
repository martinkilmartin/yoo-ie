import { GetStaticProps } from 'next'

import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Policy } from '@layouts/Legal'

import TermsOfUse from '@constants/TERMS_OF_USE'

type Props = {
  baseURL: string
  title: string
  brand: string
  heading: string
  messageTitle: string
}

const Home = ({
  baseURL,
  title,
  brand,
  heading,
  messageTitle,
}: Props): JSX.Element => (
  <Container>
    <Page baseURL={baseURL} title={title} brand={brand} heading={heading}>
      <Policy title={messageTitle} paragraphs={TermsOfUse} />
    </Page>
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL = 'sionnach.solutions'
  const title = '⚖ Terms Of Use'
  const brand = 'Sionnach Solutions'
  const heading = 'Introducing Innovation In Irish Internet Industries'
  const messageTitle = title

  return {
    props: {
      baseURL,
      title,
      brand,
      heading,
      messageTitle,
    },
  }
}

export default Home
