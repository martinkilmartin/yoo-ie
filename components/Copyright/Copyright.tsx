type Props = {
  brand: string
}

const Copyright = ({ brand }: Props): JSX.Element => (
  <div className="flex items-center justify-center pt-10 font-light text-center sm:pt-12">
    {`© ${new Date().getFullYear()} ${brand}`}
  </div>
)

export default Copyright
