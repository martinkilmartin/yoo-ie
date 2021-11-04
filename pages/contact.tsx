import { GetStaticProps } from 'next'

import { Container } from '../layout/Container'
import { Page } from '../layout/Page'
import { Contact } from '../layout/Contact'

type Props = {
  baseURL: string
  title: string
  brand: string
  heading: string
  messageTitle: string
  messagePlaceholder: string
  contactTitle: string
  contactPlaceholder: string
  buttonText: string
}

const Home = ({
  baseURL,
  title,
  brand,
  heading,
  messageTitle,
  messagePlaceholder,
  contactTitle,
  contactPlaceholder,
  buttonText,
}: Props): JSX.Element => (
  <Container>
    <Page baseURL={baseURL} title={title} brand={brand} heading={heading}>
      <Contact
        messageTitle={messageTitle}
        messagePlaceholder={messagePlaceholder}
        contactTitle={contactTitle}
        contactPlaceholder={contactPlaceholder}
        buttonText={buttonText}
      />
    </Page>
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL = 'sionnach.solutions'
  const title = 'Send us a message'
  const brand = 'Sionnach Solutions'
  const heading = 'Introducing Innovation In Irish Internet Industries'
  const messageTitle = 'Message'
  const messagePlaceholder = 'Enter your message here'
  const contactTitle = 'Email'
  const contactPlaceholder = 'your@email.address'
  const buttonText = 'Send'

  return {
    props: {
      baseURL,
      title,
      brand,
      heading,
      messageTitle,
      messagePlaceholder,
      contactTitle,
      contactPlaceholder,
      buttonText,
    },
  }
}

export default Home
