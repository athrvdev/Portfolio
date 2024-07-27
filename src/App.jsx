import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
  return (
    <div className="App font-sans bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray">
      <NavBar />
      <ThemeToggle />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
