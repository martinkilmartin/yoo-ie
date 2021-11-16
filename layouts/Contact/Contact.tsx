import { TextArea, TextInput } from '@components/Form'
import { Button } from '@components/Button'
import { Alert } from '@components/Alert'
import { FormEvent } from 'react'

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
  let result
  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const htmlForm = event.target as HTMLFormElement
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        email: htmlForm.email.value,
        message: htmlForm.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    result = await res.json()
  }
  return (
    <div className="justify-center max-w-full shadow-2xl card bg-base-100 hero-content">
      {result && <Alert text={result} />}
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
