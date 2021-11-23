import { GetStaticProps } from 'next'

import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Contact } from '@layouts/Contact'

type Props = {
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
    <Page title={title} brand={brand} heading={heading}>
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
