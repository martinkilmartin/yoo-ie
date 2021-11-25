import {
  CONTACT_TITLE,
  TAG_LINE,
  CONTACT_MESSAGE_TITLE,
  CONTACT_MESSAGE_PLACEHOLDER,
  CONTACT_EMAIL_TITLE,
  CONTACT_EMAIL_PLACEHOLDER,
  CONTACT_BUTTON_TITLE,
} from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Contact } from '@layouts/Contact'

const ContactPage = (): JSX.Element => (
  <Container>
    <Page title={CONTACT_TITLE} heading={TAG_LINE}>
      <Contact
        messageTitle={CONTACT_MESSAGE_TITLE}
        messagePlaceholder={CONTACT_MESSAGE_PLACEHOLDER}
        contactTitle={CONTACT_EMAIL_TITLE}
        contactPlaceholder={CONTACT_EMAIL_PLACEHOLDER}
        buttonText={CONTACT_BUTTON_TITLE}
      />
    </Page>
  </Container>
)

export default ContactPage
