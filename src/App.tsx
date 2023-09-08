import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import { routerConfig } from "./router/routerConfig";

const router = createBrowserRouter(routerConfig);

export const App = () => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
