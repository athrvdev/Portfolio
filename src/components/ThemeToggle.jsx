import React, { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

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

    <label className='fixed z-50 inline-block w-16 top-12 right-4 switch h-9'>
      <input  onClick={toggleTheme} className="w-0 h-0 opacity-0" type='checkbox'></input>
      <span className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer slider round dark:bg-zinc-700 bg-zinc-300 ">
        {/* {theme === 'light' ? '🌙' : ' ☀️'} */}
        </span>
    </label>

    </>
  );
};

export default ThemeToggle;
