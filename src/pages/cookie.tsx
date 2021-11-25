import { COOKIE_TITLE, TAG_LINE } from '@constants/CONTENT'
import CookiePolicy from '@constants/COOKIE_POLICY'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Policy } from '@layouts/Legal'

const Cookie = (): JSX.Element => (
  <Container>
    <Page title={COOKIE_TITLE} heading={TAG_LINE}>
      <Policy title={COOKIE_TITLE} paragraphs={CookiePolicy} />
    </Page>
  </Container>
)

export default Cookie
