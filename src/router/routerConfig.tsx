import { BaseLayout } from "../components/layouts/BaseLayout/BaseLayout";
import { AccountantPage } from "../pages/AccountantPage";
import { Home } from "../pages/Home";
import { RouterPaths } from "./routerPaths";

export const routerConfig = [
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/${RouterPaths.Accountants}`,
        element: <AccountantPage />,
      },
    ],
  },
];
