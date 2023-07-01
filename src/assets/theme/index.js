import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a0f39",
      dark: "#0a0f39",
    },
    secondary: {
      main: "#ffffff",
    },
    success: {
      main: "#12d176",
    },
    error: {
      main: "#ff1d45",
    },
    text: {
      main: "#000",
      secondary: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
