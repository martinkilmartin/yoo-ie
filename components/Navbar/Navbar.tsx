import { ThemeToggle } from '../Button'
import Link from 'next/link'

type Props = {
  logo?: JSX.Element
  brand: string
}

const Navbar = ({ logo, brand }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar bg-primary text-primary-content rounded-box">
    {logo && (
      <div className="flex-none">
        <Link href="/">
          <a>{logo}</a>
        </Link>
      </div>
    )}
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">{brand}</span>
    </div>
    <div className="flex-none">
      <ThemeToggle />
    </div>
  </div>
)

export default Navbar
