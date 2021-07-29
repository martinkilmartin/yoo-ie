import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => (
  <div className="container mx-auto">{children}</div>
)

export default Container
