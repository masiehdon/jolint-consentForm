import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={toggleDarkMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => React.useContext(DarkModeContext);
