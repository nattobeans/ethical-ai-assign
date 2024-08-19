import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import routesConfig from "src/routes/routesConfig";
import Layout from "src/pages/layout";
import { useThemeContext } from "src/theme/ThemeContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./AuthContext";
import NightModeToggle from "src/components/NightModeToggle";

const App: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <NightModeToggle /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routesConfig.map((route) => (
                <Route
                  path={route.path}
                  element={
                    route.children ? (
                      // Render child routes with the <Outlet /> component
                      <route.component />
                    ) : (
                      <route.component />
                    )
                  }
                />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
