import { PRIVACY_TITLE, BRAND, TAG_LINE } from '@constants/CONTENT'
import PrivacyPolicy from '@constants/PRIVACY_POLICY'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Policy } from '@layouts/Legal'

const PrivacyPage = (): JSX.Element => (
  <Container>
    <Page title={PRIVACY_TITLE} brand={BRAND} heading={TAG_LINE}>
      <Policy title={PRIVACY_TITLE} paragraphs={PrivacyPolicy} />
    </Page>
  </Container>
)

export default PrivacyPage
