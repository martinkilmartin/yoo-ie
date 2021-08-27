import { CSSTheme } from '../../types'

type Props = {
  theme: CSSTheme
}

const ThemeChangeListLink = ({ theme }: Props): JSX.Element => (
  <li>
    <a tabIndex={0} data-set-theme={theme.id} data-act-class="active">
      {`${theme.icon} ${theme.name}`}
    </a>
  </li>
)

export default ThemeChangeListLink
