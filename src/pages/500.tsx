import { APP_TITLE, TAG_LINE, HTTP_500 } from '@constants/CONTENT'
import { Alert } from '@components/Alert'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'

const Custom404 = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <h1 className="text-xl text-center bg-red-400">{HTTP_500}</h1>
      <Alert color="error" text="😣 😞 😓 😩 😫 🥱 😤 😡 😠 🤬 😈 👿 💀 ☠" />
    </Page>
  </Container>
)

export default Custom404
