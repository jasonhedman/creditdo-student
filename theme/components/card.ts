import { ComponentStyleConfig } from "@chakra-ui/react";

const Card : ComponentStyleConfig = {
  baseStyle: {
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: "#ffffff",
    backgroundClip: "border-box",
    rounded:'lg',
    shadow: 'xl'
  },
};

export default Card