import { GetStaticProps } from 'next'

import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Policy } from '@layouts/Legal'

import CookiePolicy from '@constants/COOKIE_POLICY'

type Props = {
  title: string
  brand: string
  heading: string
  messageTitle: string
}

const Cookie = ({
  title,
  brand,
  heading,
  messageTitle,
}: Props): JSX.Element => (
  <Container>
    <Page title={title} brand={brand} heading={heading}>
      <Policy title={messageTitle} paragraphs={CookiePolicy} />
    </Page>
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const title = '🍪 Cookie Policy'
  const brand = 'Sionnach Solutions'
  const heading = 'Introducing Innovation In Irish Internet Industries'
  const messageTitle = title

  return {
    props: {
      title,
      brand,
      heading,
      messageTitle,
    },
  }
}

export default Cookie
