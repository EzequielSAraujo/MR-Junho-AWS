import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeColors {
  primary: string;
  primaryLight: string;
  secondaryAccent: string;
  background: string;
  mainText: string;
  secondaryText: string;
  error: string;
  secondaryBg: string;
}

interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}

const themes: Theme = {
  light: {
    primary: '#5B3CC4',
    primaryLight: '#E6E0F7',
    secondaryAccent: '#32C25B',
    background: '#F4F4F4',
    mainText: '#1E1E1E',
    secondaryText: '#AAAAAA',
    error: '#E63946',
    secondaryBg: '#FFFFFF',
  },
  dark: {
    primary: '#552DDC',
    primaryLight: '#A393D1',
    secondaryAccent: '#32C25B',
    background: '#282828',
    mainText: '#F0F0F0',
    secondaryText: '#D9D9D9',
    error: '#E63946',
    secondaryBg: '#1E1E1E',
  },
};

interface ThemeContextType {
  theme: ThemeColors;
  setTheme: (themeName: 'light' | 'dark') => void;
  currentThemeName: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState<'light' | 'dark'>('light');
  const currentTheme = themes[currentThemeName];

  const setTheme = (themeName: 'light' | 'dark') => {
    setCurrentThemeName(themeName);
    AsyncStorage.setItem('appTheme', themeName);
  };

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('appTheme');
      if (storedTheme) {
        setCurrentThemeName(storedTheme as 'light' | 'dark');
      }
    };
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme, currentThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};