import { useState } from 'react'

type Props = {
  a?: string
  b?: string
}

const ThemeToggle = ({ a = 'dark', b = 'light' }: Props): JSX.Element => {
  const [theme, setTheme] = useState(true)
  const toggleTheme = () => setTheme((theme) => !theme)
  return (
    <button
      data-toggle-theme={`${a},${b}`}
      data-act-class="ACTIVECLASS"
      onClick={toggleTheme}
    >
      {theme ? '🌞' : '🌚'}
    </button>
  )
}

export default ThemeToggle
