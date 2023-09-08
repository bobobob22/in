import { Outlet } from "react-router";
import { LayoutWrapper } from "./styles";
import { Header } from "../../header/Header";

export const BaseLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};
