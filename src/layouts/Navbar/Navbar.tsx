import { ThemeToggle } from '@components/ThemeToggle'

type Props = {
  logo?: JSX.Element
  brand: string
}

const Navbar = ({ logo, brand }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar bg-primary text-primary-content rounded-box">
    {logo && (
      <div className="flex-none">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <span className="sr-only">Home</span>
          {logo}
        </a>
      </div>
    )}
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">{brand}</a>
      </span>
    </div>
    <div className="flex-none">
      <ThemeToggle />
    </div>
  </div>
)

export default Navbar
