import { VercelRequest, VercelResponse } from '@vercel/node'

const HelloWorld = (
  _request: VercelRequest,
  response: VercelResponse
): void => {
  response.status(200).send(JSON.stringify({ result: 'success' }))
}

export default HelloWorld
