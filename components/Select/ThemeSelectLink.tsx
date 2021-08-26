import { CSSTheme } from '../../types'

type Props = {
  theme: CSSTheme
}

const ThemeSelectLink = ({ theme }: Props): JSX.Element => {
  return (
    <option value={theme.id}>
      {theme.icon} {theme.name}
    </option>
  )
}

export default ThemeSelectLink
