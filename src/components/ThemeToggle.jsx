import React, { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>

    <label className='absolute inline-block w-16 top-8 right-4 switch h-9'>
      <input  onClick={toggleTheme} class="opacity-0 w-0 h-0" type='checkbox'></input>
      <span class="slider round absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-zinc-700 dark:bg-zinc-300 ">
        {/* {theme === 'light' ? '🌙' : ' ☀️'} */}
        </span>
    </label>

    </>
  );
};

export default ThemeToggle;
