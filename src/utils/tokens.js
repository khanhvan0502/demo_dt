import { amber, deepOrange, grey, blue, common } from "@mui/material/colors";

const palette = {
  light: {
    primary: {
      main: "#34C0AC",
      light: "#B1DED3",
      dark: "#00765A",
    },
  },
};

export const lightTokens = {
  primary: {
    main: palette.light.primary.main,
    light: palette.light.primary.light,
    dark: palette.light.primary.dark,
  },
  background: {
    bgDark: "green",
  },
  divider: amber[200],
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};

export const darkTokens = {
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: "#",
    paper: deepOrange[900],
    bgDark: "#5158cf",
  },
  text: {
    primary: "#fff",
    secondary: grey[500],
  },
};
