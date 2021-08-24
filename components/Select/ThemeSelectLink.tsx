import { CSSTheme } from '../../types'

type Props = {
  theme: CSSTheme
}

const ThemeSelectLink = ({ theme }: Props): JSX.Element => (
  <option tabIndex={0} data-set-theme={theme.id} data-act-class="active">
    {theme.name}
  </option>
)

export default ThemeSelectLink
