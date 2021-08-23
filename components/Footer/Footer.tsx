import { Copyright } from '../Copyright'

type Props = {
  brand: string
}

const Footer = ({ brand }: Props): JSX.Element => (
  <footer className="p-10 footer bg-primary text-primary-content footer-center">
    <div>
      <Copyright brand={brand} />
    </div>
  </footer>
)

export default Footer
