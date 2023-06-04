import React, { useState } from 'react'

const ThemeColor = () => {

  const [mode, setMode] = useState(true)

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  const handleMode = (t) => {
    setMode(!mode)
    t ? setTheme('light') : setTheme('dark')
  }
  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => handleMode(!mode)} />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
      >{mode ? <i className="bi bi-brightness-high ms-1" style={{ color: '#ff9100' }}></i> : <i className="bi bi-moon-stars ms-1" style={{ color: '#00ffff' }}></i>}
      </label>
    </div>
  )
}

export default ThemeColor