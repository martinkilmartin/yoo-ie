type Props = {
  brand: string
}

const Copyright = ({ brand }: Props): JSX.Element => (
  <p>{`© ${new Date().getFullYear()} ${brand}`}</p>
)

export default Copyright
