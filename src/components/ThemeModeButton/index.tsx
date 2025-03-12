import { useState } from 'react'

const ThemeModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return <button onClick={toggleTheme}>{isDarkMode ? '🌙' : '☀️'}</button>
}

export default ThemeModeButton
