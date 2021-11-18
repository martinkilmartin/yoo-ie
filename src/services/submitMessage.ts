import { FormEvent } from 'react'

const SubmitMessage = async (
  event: FormEvent<HTMLFormElement>
): Promise<any> => {
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
  const result = await res.json()
  return result
}

export default SubmitMessage
