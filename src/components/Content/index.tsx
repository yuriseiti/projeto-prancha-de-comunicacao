import React, { useState } from 'react';
import { Container } from "./styles";
import { Grid, Box, Typography } from "@mui/material";
import eu from "../../assets/Pictograms/eu.png";
import voce from "../../assets/Pictograms/voce.png";
import quero from "../../assets/Pictograms/quero.png";
import nao_quero from "../../assets/Pictograms/nao_quero.png";
import agua from "../../assets/Pictograms/agua.png";
import banheiro from "../../assets/Pictograms/banheiro.png";
import brincar from "../../assets/Pictograms/brincar.png";
import sair from "../../assets/Pictograms/sair.png";
import comer from "../../assets/Pictograms/comer.png";
import conversar from "../../assets/Pictograms/conversar.png";
import triste from "../../assets/Pictograms/triste.png";
import dor from "../../assets/Pictograms/dor.png";
import feliz from "../../assets/Pictograms/feliz.png";
import oi from "../../assets/Pictograms/oi.png";
import nao from "../../assets/Pictograms/nao.png";
import sim from "../../assets/Pictograms/sim.png";
import lavar_as_maos from "../../assets/Pictograms/lavar_as_maos.png";
import acabou from "../../assets/Pictograms/acabou.png";
import dormir from "../../assets/Pictograms/dormir.png";
import obrigado from "../../assets/Pictograms/obrigado.png";
import tchau from "../../assets/Pictograms/tchau.png";



const pictograms = [
  { image: oi, text: "Oi" },
  { image: tchau, text: "Tchau" },
  { image: eu, text: "Eu" },
  { image: voce, text: "Você" },
  { image: quero, text: "Quero" },
  { image: nao_quero, text: "Não quero" },
  { image: agua, text: "Água" },
  { image: banheiro, text: "Banheiro" },
  { image: brincar, text: "Brincar" },
  { image: conversar, text: "Conversar" },
  { image: lavar_as_maos, text: "Lavar as mãos" },
  { image: dormir, text: "Dormir" },
  { image: sair, text: "Ir embora" },
  { image: comer, text: "Comer" },
  { image: feliz, text: "Feliz" },
  { image: triste, text: "Triste" },
  { image: dor, text: "Dor" },
  { image: sim, text: "Sim" },
  { image: nao, text: "Não" },
  { image: obrigado, text: "Obrigado" },
  { image: acabou, text: "Acabou" },
];

const Content: React.FC = () => {
  const [speaking, setSpeaking] = useState<number | null>(null);

  const speakText = (text: string, index: number) => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';

    setSpeaking(index);

    utterance.onend = () => {
      setSpeaking(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Container style={{ overflow: 'hidden' }}>
      <Grid container spacing={2}>
        {pictograms.map((pictogram, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              onClick={() => speakText(pictogram.text, index)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingTop: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid #ccc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                backgroundImage: `url(${pictogram.image})`,
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                opacity: speaking === index ? 0.7 : 1,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  color: "#000",
                  textAlign: "center",
                  width: "calc(100% - 16px)",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  borderRadius: "4px",
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