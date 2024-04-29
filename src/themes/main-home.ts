import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const theme = extendTheme({
  config,

  colors: {
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#000000",
      900: "#000000",
    },
    red: {
      50: "#FEE6E8",
      100: "#FB8E94",
      200: "#e50914",
      300: "#e50914",
      400: "#F7363F",
      500: "#F50A15",
      600: "#C40811",
      700: "#93060D",
      800: "#620409",
      900: "#310204",
    },
  },
});

export default theme;
