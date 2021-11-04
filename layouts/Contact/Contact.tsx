import { TextArea, TextInput } from '@components/Form'
import { Button } from '@components/Button'

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
}: Props): JSX.Element => (
  <div className="justify-center max-w-full shadow-2xl card bg-base-100 hero-content">
    <div className="card-body">
      <TextArea title={messageTitle} placeholder={messagePlaceholder} />
      <TextInput title={contactTitle} placeholder={contactPlaceholder} />
      <div className="mt-6 form-control">
        <Button text={buttonText} />
      </div>
    </div>
  </div>
)

export default Contact
