import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/semed-logo.png";

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="Logo"
        style={{ height: "80px", cursor: "pointer" }}
        onClick={() => window.location.reload()}
      />
    </HeaderContainer>
  );
};

export default Header;
