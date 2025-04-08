import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import { Box, Container, Grid, Typography } from "@mui/material";
import { WeatherResponse } from "./models/WeatherResponse.model";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
});

const App = () => {
  const [cityData, setCityData] = useState<WeatherResponse | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-neutral-100 min-h-dvh">
        {/* Title Section */}
        <Box padding={2} className="bg-sky-400">
          <Container>
            <Typography variant="h6" align="left" color="white">
              W e a t h e r
            </Typography>
          </Container>
        </Box>

        {/* Main Section */}
        <Container>
          <Grid container spacing={1} style={{ paddingTop: "20px" }}>
            <Grid size={12} className="flex w-full justify-center items-center">
              <SearchBar setCityData={setCityData} />
            </Grid>
            <Grid size={12}>
              {cityData ? (
                <WeatherDetails city={cityData} />
              ) : (
                <Typography textAlign={"center"}>
                  Nenhum dado encontrado
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
