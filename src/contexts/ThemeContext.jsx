import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: isDark ? '#1e3a8a' : '#3b82f6',
      secondary: isDark ? '#3b82f6' : '#1e3a8a',
      accent: '#06b6d4',
      background: isDark 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      surface: isDark 
        ? 'rgba(248, 250, 252, 0.05)'
        : 'rgba(15, 23, 42, 0.05)',
      text: isDark ? '#f8fafc' : '#0f172a',
      textSecondary: isDark ? '#cbd5e1' : '#475569',
      border: isDark 
        ? 'rgba(30, 58, 138, 0.2)'
        : 'rgba(59, 130, 246, 0.2)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
