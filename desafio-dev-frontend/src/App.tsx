import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>Hello World</Typography>
    </ThemeProvider>
  );
};

export default App;
