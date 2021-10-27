import { VercelRequest, VercelResponse } from '@vercel/node'

const sendpulse = require('sendpulse-api')

const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_ID
const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET
const TOKEN_STORAGE = '/tmp/'

const SendPulse = (request: VercelRequest, response: VercelResponse): void => {
  const { message = '', email = '' } = request.query
  if (message.length && email.length) {
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
  } else {
    response
      .status(400)
      .send({ messageLength: message.length, emailLength: email.length })
  }
}

export default SendPulse
