import { VercelResponse } from '@vercel/node'

const HelloWorld = (response: VercelResponse): void => {
  response.status(200).send(JSON.stringify({ result: 'success' }))
}

export default HelloWorld
