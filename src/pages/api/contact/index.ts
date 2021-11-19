import { VercelRequest, VercelResponse } from '@vercel/node'

import SendEmail from '@services/sendEmail'

const SendPulse = async (
  request: VercelRequest,
  response: VercelResponse
): Promise<void> => {
  try {
    const { message = '', email = '' } = request.body
    await SendEmail(response, message, email)
  } catch (error) {
    response.status(500).send(error)
  }
}

export default SendPulse
