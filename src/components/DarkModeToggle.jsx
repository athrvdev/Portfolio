import React from 'react'
import { useTheme } from '../context/ThemeContext'

const DarkModeToggle = () => {

  const {darkMode, toggleTheme} = useTheme();

  return (
    <button onClick={toggleTheme} className='p-2 m-2 rounded-md bg-gray=200 dark:bg-gray-800' >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle