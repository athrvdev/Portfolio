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
      className="fixed z-50 p-2 transition-transform transform rounded-full shadow-lg bottom-6 bottom-10 h-11 w-11 bg-slate-950 dark:bg-red-200 text-appleDarkGray dark:text-appleGray hover:scale-105"
    >
      {theme === 'light' ? '🌙' : ' ☀️'}
    </button>
  );
};

export default ThemeToggle;
