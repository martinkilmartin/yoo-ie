import { TERMS_TITLE, TAG_LINE } from '@constants/CONTENT'
import TermsOfUse from '@constants/TERMS_OF_USE'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Policy } from '@layouts/Legal'

const TermsPage = (): JSX.Element => (
  <Container>
    <Page title={TERMS_TITLE} heading={TAG_LINE}>
      <Policy title={TERMS_TITLE} paragraphs={TermsOfUse} />
    </Page>
  </Container>
)

export default TermsPage
