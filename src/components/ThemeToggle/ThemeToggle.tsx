import { useState } from 'react'

import { Sun, Moon } from '../SVG'

type Props = {
  a?: string
  b?: string
}

const ThemeToggle = ({ a = 'cmyk', b = 'dark' }: Props): JSX.Element => {
  const [theme, setTheme] = useState(true)
  const toggleTheme = () => setTheme((theme) => !theme)
  return (
    <button
      data-toggle-theme={`${a},${b}`}
      data-act-class="ACTIVECLASS"
      onClick={toggleTheme}
    >
      <span className="sr-only">{theme ? a : b}</span>
      {theme ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggle
