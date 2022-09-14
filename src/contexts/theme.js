import { createContext, useState } from "react";

const content = {
  defaultTheme: "light",
  defaultLoggedStatus: true,
};

export const AppVillaContext = createContext(content);

const { Provider } = AppVillaContext;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(content.defaultTheme);
  const [isLogged, setIsLogged] = useState(content.defaultLoggedStatus);

  return (
    <Provider value={{ theme, setTheme, isLogged, setIsLogged }}>
      {children}
    </Provider>
  );
};
