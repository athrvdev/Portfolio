import React, {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () =>{
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }
        else {
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