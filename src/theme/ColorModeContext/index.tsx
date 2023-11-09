import { createContext } from 'react';

interface ContextType {
  toggleColorMode: () => void;
  // Other properties or methods related to your context
}

const ColorModeContext = createContext<ContextType>({
  toggleColorMode: () => {}, // Default value for the toggleColorMode function
  // Other default context values
});

export default ColorModeContext;
