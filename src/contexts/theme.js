import { createContext, useState } from "react";

const DEFAULT_THEME = "light";

export const ThemeContext = createContext(DEFAULT_THEME);

const { Provider } = ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};
