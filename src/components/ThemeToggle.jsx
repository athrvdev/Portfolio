import React, { useEffect, useState } from 'react';

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
    <button
      onClick={toggleTheme}
      className="z-50 p-2 pr-4 transition-transform transform rounded-full shadow-lg h-11 w-11 bg-slate-400 dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray hover:scale-105"
    >
      {theme === 'light' ? '🌙' : ' ☀️'}
    </button>
  );
};

export default ThemeToggle;
