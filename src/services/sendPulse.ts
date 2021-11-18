const sendpulse = require('sendpulse-api')

const API_USER_ID = process.env.SENDPULSE_ID
const API_SECRET = process.env.SENDPULSE_SECRET
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
const CONTACT_FROM_NAME = process.env.CONTACT_FROM_NAME
const CONTACT_TO_NAME = process.env.CONTACT_TO_NAME
const TOKEN_STORAGE = '/tmp/'

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
        name: CONTACT_FROM_NAME,
        email: CONTACT_FROM_EMAIL,
      },
      to: [
        {
          name: CONTACT_TO_NAME,
          email: CONTACT_TO_EMAIL,
        },
      ],
    }
    sendpulse.smtpSendMail(returnResponseData, emailData)
  })
}

export default SendEmail
