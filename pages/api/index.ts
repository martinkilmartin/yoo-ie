import { VercelRequest, VercelResponse } from '@vercel/node'

const HelloWorld = (request: VercelRequest, response: VercelResponse): void => {
  const { name = 'World' } = request.query
  response.status(200).send(`Hello ${name}!`)
}

export default HelloWorld
