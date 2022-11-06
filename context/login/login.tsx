/*
// context/todoContext.tsx
import React, { useState, useContext, createContext } from 'react';


interface Props {
    children: React.ReactNode;
}

interface Theme {
    name: string;
    background: string;
    font: string;
    secondaryFont: string;
}

interface ThemeInterface {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

let defaultTheme: Theme;

const storage = localStorage.getItem('theme')

if (storage) {
    defaultTheme = JSON.parse(storage);
}
else{
    defaultTheme = {
        name: 'light',
        background: '#fdefee',
        font: '#282828',w
        secondaryFont: '#969696'
    }
}
  
export const classContext = createContext<ThemeInterface>({theme: defaultTheme, setTheme: () => {} })

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
                {children}
        </ThemeContext.Provider>
    )
}*/