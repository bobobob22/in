import { HeaderWrapper, StyledLogo } from "./styles";

import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo src={logo} alt="" />
    </HeaderWrapper>
  );
};
