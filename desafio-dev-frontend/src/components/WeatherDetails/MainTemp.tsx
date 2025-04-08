import { Box, Grid, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../hooks/capitalizeFirstLetter";
import { WeatherResponse } from "../../models/WeatherResponse.model";
import "../../index.css";

interface Props {
  city: WeatherResponse;
}

const MainTemp: React.FC<Props> = ({ city }) => {
  const currentWeather: string = city.weather[0].main.toLowerCase();

  return (
    <Grid
      size={12}
      className={`relative flex flex-col w-full h-48 justify-center items-center border-1 border-neutral-400 rounded-md + ${currentWeather}`}
    >
      {/* Box to apply the blur and darker background on the background image */}
      <Box
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(2px)",
          borderRadius: "inherit",
        }}
      />

      {/* Main Content Box */}
      <Box className="relative z-10 text-center">
        <Typography variant="h6">{city.name}</Typography>
        <Typography variant="h3">{city.main.temp.toFixed(1)}ºC</Typography>
        <Box className="flex gap-4">
          <Typography variant="h6">
            Mín: {city.main.temp_min.toFixed(1)}ºC
          </Typography>
          <Typography variant="h6">
            Máx: {city.main.temp_max.toFixed(1)}ºC
          </Typography>
        </Box>
        <Typography variant="subtitle1">
          Condição: {capitalizeFirstLetter(city.weather[0].description)}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MainTemp;
