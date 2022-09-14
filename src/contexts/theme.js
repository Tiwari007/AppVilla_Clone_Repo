import { createContext, useState } from "react";

const content =
{
  defaultTheme:'light',
  defaoultLoggedStatus:false
}

export const AppVillaContext = createContext(content);

const { Provider } = AppVillaContext;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(content.defaultTheme);
  const [isLogged, setIsLogged] = useState(content.defaoultLoggedStatus);

  return <Provider value={{ theme, setTheme,isLogged,setIsLogged }}>{children}</Provider>;
};
