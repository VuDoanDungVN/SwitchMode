import { View, Text, Appearance } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = "light" | "dark";
interface ThemeContextType {
    theme : Theme;
    toggleTheme : () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider:React.FC<{children : React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light")
    useEffect(()=>{
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem("theme");
            if (savedTheme === "light" || savedTheme === "dark"){
                setTheme(savedTheme);
            }else {
                const systemTheme = Appearance.getColorScheme();
                setTheme(systemTheme === "dark" ? "dark" : "light")
            }
        };
        loadTheme();
    }, [])

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        await AsyncStorage.setItem("theme", newTheme)
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context){
throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}
