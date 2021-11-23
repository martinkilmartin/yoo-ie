import { APP_TITLE, BRAND, TAG_LINE } from '@constants/CONTENT'
import heroBGImage from '@img/bg/simple-software-solutions-2400w.jpg'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Hero } from '@layouts/Hero'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} brand={BRAND} heading={TAG_LINE}>
      <Hero bgImageData={heroBGImage} heading={TAG_LINE} />
    </Page>
  </Container>
)

export default HomePage
