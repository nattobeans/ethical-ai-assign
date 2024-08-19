import { PaletteMode, createTheme } from "@mui/material";
import React, { useState } from "react";
import theme from "./theme";

export const useColourTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColourMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  const modifiedTheme = React.useMemo(
    () => createTheme({ ...theme, palette: { ...theme.palette, mode } }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColourMode,
  };
};
