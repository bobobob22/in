import { RouterProvider, createHashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "./ErrorBoundary";
import { routerConfig } from "./router/routerConfig";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import "./styles/fonts.css";

const router = createHashRouter(routerConfig);

export const App = () => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
