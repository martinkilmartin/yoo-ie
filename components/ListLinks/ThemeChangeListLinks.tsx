import { CSSTheme } from '../../types'
import { ThemeChangeListLink } from './'

type Props = {
  themes: CSSTheme[]
}

const ThemeChangeListLinks = ({ themes }: Props): JSX.Element => (
  <>
    {themes.map((theme, index) => (
      <ThemeChangeListLink theme={theme} key={index} />
    ))}
  </>
)

export default ThemeChangeListLinks
