import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props): JSX.Element => (
  <div className="container mx-auto 4xl">{children}</div>
)

export default Container
