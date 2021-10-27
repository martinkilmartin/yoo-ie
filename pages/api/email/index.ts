import { VercelRequest, VercelResponse } from '@vercel/node'

const sendpulse = require('sendpulse-api')

const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_ID
const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET
const TOKEN_STORAGE = '/tmp/'

const history: any = {}

const rateLimit = (ip: string | string[], timeout = 60 * 1000) => {
  if (Array.isArray(ip)) {
    ip = ip[0]
  }
  if (history[ip] > Date.now() - timeout) {
    throw new Error('Rate Limit Exceeded')
  }
  history[ip] = Date.now()
}

const SendPulse = async (
  request: VercelRequest,
  response: VercelResponse
): Promise<void> => {
  try {
    rateLimit(request.headers['x-real-ip'] || ['0.0.0.0'], 10 * 60 * 1000)
    const { message = '', email = '' } = request.query
    await SendEmail(response, message, email)
  } catch (error) {
    response.status(500).send(error)
  }
}

const SendEmail = async (
  response: VercelResponse,
  message: string | string[],
  email: string | string[]
) => {
  sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function () {
    const returnResponseData = function (data: any) {
      response.status(200).send(data)
    }
    const emailData = {
      html: `<p>${message}</p><p>${email}</p>`,
      text: `${message}+${email}`,
      subject: 'Website Enquiry',
      from: {
        name: 'Sionnach Solutions a.k.a. Sionnach Buí',
        email: 'info@sionnach.solutions',
      },
      to: [
        {
          name: 'Sionnach Solutions a.k.a. Sionnach Buí',
          email: 'info@sionnach.solutions',
        },
      ],
    }
    sendpulse.smtpSendMail(returnResponseData, emailData)
  })
}

export default SendPulse
