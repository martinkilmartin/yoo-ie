import Image from 'next/image'

import { Button } from '../Button'
import { CodeMockup } from '../Mockups'

type Props = {
  bgImageData?: StaticImageData
  bgImageAlt?: string
  heading: string
  description?: string
  codedView?: boolean
  button?: string
}

const Hero = ({
  bgImageData,
  bgImageAlt,
  heading,
  description,
  codedView = false,
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
      <div className="max-w-full">
        {codedView ? (
          <CodeMockup lines={[heading]} />
        ) : (
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
        )}
        {description && <p className="mb-5">{description}</p>}
        {button && <Button text={button} />}
      </div>
    </div>
  </div>
)

export default Hero
