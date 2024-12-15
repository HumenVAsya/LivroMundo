import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#004832",
    },
    secondary: {
      main: "#FFD012",
    },
  },
  breakpoints: {
    values: {
      ...createTheme().breakpoints.values,
      lg: 1290,
    },
  },
});
