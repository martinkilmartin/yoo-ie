import { CSSTheme } from '../../types'

import { Dropdown } from '../Dropdown'
import { ThemeChangeListLinks } from '../ListLinks'

type Props = {
  logo?: JSX.Element
  brand: string
  themes: CSSTheme[]
}

const Navbar = ({ logo, brand }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar bg-primary text-primary-content rounded-box">
    {logo && <div className="flex-none">{logo}</div>}
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">{brand}</span>
    </div>
    <div className="flex-none">
      <Dropdown align="end">
        <ThemeChangeListLinks />
      </Dropdown>
    </div>
  </div>
)

export default Navbar
