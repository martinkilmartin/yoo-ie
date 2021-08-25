import Image from 'next/image'

import { Button } from '../Button'
import { CodeMockup } from '../Mockups'

type Props = {
  bgImageData?: StaticImageData
  bgImageAlt?: string
  heading?: string
  codeLines?: string[]
  description?: string
  button?: string
}

const Hero = ({
  bgImageData,
  bgImageAlt,
  heading,
  description,
  codeLines,
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
        {codeLines?.length ? (
          <CodeMockup lines={codeLines} />
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
