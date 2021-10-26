import { VercelRequest, VercelResponse } from '@vercel/node'

const sendpulse = require('sendpulse-api')

const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_ID
const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET
const TOKEN_STORAGE = '/tmp/'

const SendPulse = (request: VercelRequest, response: VercelResponse): void => {
  sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function () {
    const returnResponseData = function (data: any) {
      response.status(200).send(data)
    }

    const email = {
      html: '<h1>Example text</h1>',
      text: 'Example text',
      subject: 'Example subject',
      from: {
        name: 'Sionnach Buí',
        email: 'info@sionnach.solutions',
      },
      to: [
        {
          name: 'Martin',
          email: 'martinkilmartin@gmail.com',
        },
      ],
      bcc: [
        {
          name: 'Marty',
          email: 'martymcfly@duck.com',
        },
      ],
    }
    sendpulse.smtpSendMail(returnResponseData, email)
  })
}

export default SendPulse
