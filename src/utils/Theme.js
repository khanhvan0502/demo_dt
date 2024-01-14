import { darkTokens, lightTokens } from "./tokens";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightTokens : darkTokens),
  },
  typography: {
    fontFamily: [
      "Oswald",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    body1: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  },
});
