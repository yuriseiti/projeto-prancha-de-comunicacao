import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/semed-logo.png";
import { Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "80px", cursor: "pointer", marginRight: "16px" }}
          onClick={() => window.location.reload()}
        />
        <Typography
          sx={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            flexGrow: 1,
            marginRight: "80px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Centro Municipal de Educação Inclusiva da REME
        </Typography>
      </Box>
    </HeaderContainer>
  );
};

export default Header;
