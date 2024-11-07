import React, {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    
    const [darkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem('portfolio-theme') === 'dark' || !localStorage.getItem('portfolio-theme');
    });

    const toggleTheme = () =>{
        setDarkMode((prevMode)=> !prevMode);
    }

    useEffect(()=>{
        if(darkMode){
            localStorage.setItem('portfolio-theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        else {
            localStorage.setItem('portfolio-theme', 'light');
            document.documentElement.classList.remove('dark');
        }
        
    }, [darkMode])
    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useTheme must be used withinn ThemePovider')
    }
    return context;
}