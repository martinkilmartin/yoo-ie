import Image from 'next/image'

import { Button } from '../Button'

type Props = {
  bgImageData?: StaticImageData
  bgImageAlt?: string
  heading: string
  description?: string
  button?: string
}

const Hero = ({
  bgImageData,
  bgImageAlt,
  heading,
  description,
  button,
}: Props): JSX.Element => (
  <div className="min-h-16 hero bg-base-200">
    {bgImageData && (
      <div className="hero-overlay">
        <Image
          src={bgImageData.src}
          alt={bgImageAlt ?? 'Background image'}
          height={bgImageData.height}
          width={bgImageData.width}
        />
      </div>
    )}
    <div className="text-center hero-content text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
        {description && <p className="mb-5">{description}</p>}
        {button && <Button text={button} />}
      </div>
    </div>
  </div>
)

export default Hero
