import Image from 'next/image'

type Props = {
  bgImageData?: StaticImageData
  bgImageAlt?: string
  heading?: string
  description?: string
}

const Hero = ({
  bgImageData,
  bgImageAlt,
  heading,
  description,
}: Props): JSX.Element => (
  <div className="min-h-6 hero bg-base-200">
    {bgImageData && (
      <div className="flex-col hero-content lg:flex-row-reverse">
        <Image
          className="max-w-sm rounded-lg shadow-2xl"
          src={bgImageData.src}
          alt={bgImageAlt ?? 'Background image'}
          height={bgImageData.height}
          width={bgImageData.width}
        />
        <div>
          {heading && <h1 className="mb-5 text-5xl font-bold">{heading}</h1>}
          {description && <p className="mb-5">{description}</p>}
        </div>
      </div>
    )}
  </div>
)

export default Hero
