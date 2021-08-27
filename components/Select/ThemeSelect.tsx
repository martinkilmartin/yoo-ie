import { CSSTheme } from '../../types'

import ThemeSelectLink from './ThemeSelectLink'

type Props = {
  themes: CSSTheme[]
}

const ThemeSelect = ({ themes }: Props): JSX.Element => (
  <select
    className="w-full max-w-xs select select-bordered select-primary text-base-content"
    data-choose-theme
  >
    {themes.map((theme, index) => (
      <ThemeSelectLink theme={theme} key={index} />
    ))}
  </select>
)

export default ThemeSelect
