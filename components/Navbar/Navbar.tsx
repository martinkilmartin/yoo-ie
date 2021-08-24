import { CSSTheme } from '../../types'

import { ThemeSelect } from '../Select'

type Props = {
  brand: string
  themes: CSSTheme[]
}

const Navbar = ({ brand, themes }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar bg-primary text-primary-content rounded-box">
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">{brand}</span>
    </div>
    <div className="flex-none">
      <ThemeSelect themes={themes} />
    </div>
  </div>
)

export default Navbar
