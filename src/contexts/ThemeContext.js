import React, { useState, createContext } from 'react'
import bgImageDark from '../media/bgDark.jpg';
import bgImageLight from '../media/bgLight.jpg';


export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {

    const [isLightTheme, setIsLightTheme] = useState(false);
    
    const [light] = useState(
        {
            statusFont: '#555',
            statusBg: '#e9e9e9',
            boardBorder: '#79b2c1',
            boardBg: '#a5a5a5',
            bgImage: bgImageLight,
            newGameBg: '#1dbd98'
        }
    );
    const [dark] = useState(
        {
            statusFont: 'lightGray',
            statusBg: 'black',
            boardBorder: '#888',
            boardBg: '#333',
            bgImage: bgImageDark,
            newGameBg: '#8a0049'
        }
    );

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
