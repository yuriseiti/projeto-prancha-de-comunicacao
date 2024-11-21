import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/placeholder-logo.png";

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="Logo"
        style={{ height: "24px", cursor: "pointer" }}
        onClick={() => window.location.reload()}
      />
    </HeaderContainer>
  );
};

export default Header;
