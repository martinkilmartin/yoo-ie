import { Button } from '../Button'

type Props = {
  heading: string
  description: string
  button?: string
}

const Hero = ({ heading, description, button }: Props) => (
  <div className="min-h-screen hero bg-base-200">
    <div className="text-center hero-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
        <p className="mb-5">{description}</p>
        {button && <Button text={button} />}
      </div>
    </div>
  </div>
)

export default Hero
