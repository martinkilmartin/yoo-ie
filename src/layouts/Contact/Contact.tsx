import { TextArea, TextInput } from '@components/Form'
import { Button } from '@components/Button'

import submitMessage from '@services/contact'

type Props = {
  messageTitle: string
  messagePlaceholder: string
  contactTitle: string
  contactPlaceholder: string
  buttonText: string
}

const Contact = ({
  messageTitle,
  messagePlaceholder,
  contactTitle,
  contactPlaceholder,
  buttonText,
}: Props): JSX.Element => {
  return (
    <div className="justify-center max-w-full shadow-2xl card bg-base-100 hero-content">
      <div className="card-body">
        <form onSubmit={submitMessage}>
          <TextArea
            title={messageTitle}
            placeholder={messagePlaceholder}
            name="message"
            id="message"
          />
          <TextInput
            title={contactTitle}
            placeholder={contactPlaceholder}
            type="email"
            name="email"
            id="email"
          />
          <div className="mt-6 form-control">
            <Button text={buttonText} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
