import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/semed-logo.png";
import { Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{
            height: "80px",
            maxHeight: "100%",
            width: "auto",
            cursor: "pointer",
            marginRight: { xs: "8px", sm: "16px" },
          }}
          onClick={() => window.location.reload()}
        />
        <Typography
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.7rem",
            },
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            flexGrow: 1,
            marginRight: { xs: "16px", sm: "80px" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          Centro Municipal de Educação Especial Inclusiva da REME
        </Typography>
      </Box>
    </HeaderContainer>
  );
};

export default Header;
