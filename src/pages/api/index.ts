import { VercelRequest, VercelResponse } from '@vercel/node'

const HelloWorld = (request: VercelRequest, response: VercelResponse): void => {
  response
    .status(200)
    .send(`Hello ${request.query.country} ${request.query.ip}!`)
}

export default HelloWorld
