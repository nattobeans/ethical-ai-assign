import { createTheme, Theme } from "@mui/material";
import { createContext, useContext, FC, PropsWithChildren } from "react";
import { useColourTheme } from "src/theme/useColourTheme";

type ThemeContextType = {
  mode: string;
  toggleColourMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColourMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColourTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
