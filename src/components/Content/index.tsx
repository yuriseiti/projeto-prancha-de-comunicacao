import React, { useState } from "react";
import { Container } from "./styles";
import { Grid, Box, Typography } from "@mui/material";
import { PictogramLabels } from "../../assets/Pictograms";

const Content: React.FC = () => {
  const [speaking, setSpeaking] = useState<number | null>(null);

  const speakText = (text: string, index: number) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    setSpeaking(index);
    utterance.onend = () => {
      setSpeaking(null);
    };
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Container style={{ overflow: "hidden" }}>
      <Grid container spacing={2}>
        {PictogramLabels.map((pictogram, index) => (
          <Grid item xs={12} sm={6} md={4} xl={2} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                onClick={() => speakText(pictogram.text, index)}
                sx={{
                  width: "100%",
                  paddingTop: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  borderRadius: "8px",
                  backgroundImage: `url(${pictogram.image})`,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  opacity: speaking === index ? 0.7 : 1,
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "#000",
                  textAlign: "center",
                  padding: "4px",
                }}
              >
                {pictogram.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Content;