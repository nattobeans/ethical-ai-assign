import React from "react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "src/theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColourMode } = useThemeContext();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgColor: "background.default",
        color: "text.primary",
        borderColor: "text.primary",
        // border: "1px solid",
        // borderRadius: 25,
        // pl: 2,
        // pr: 1
        px: 1
      }}
    >
      {/* {mode} mode */}
      <IconButton sx={{ ml: 1 }} onClick={toggleColourMode} color="inherit">
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
