import { Grid, Typography } from "@mui/material";
import { WeatherResponse } from "../../models/WeatherResponse.model";
import { convUnixToTimestamp } from "../../hooks/convUnixToTimestamp";
import MainTemp from "./MainTemp";

interface Props {
  city: WeatherResponse;
}

const WeatherDetails: React.FC<Props> = ({ city }) => {
  return (
    <Grid container spacing={1}>
      {/* Main Temp Card */}
      <MainTemp city={city} />

      {/* Other info cards */}
      <Grid container size={12} spacing={1}>
        <Grid
          size={{ xs: 6, sm: 4, md: 3 }}
          height={100}
          className="flex flex-col border-1 border-neutral-400 rounded-md justify-center items-center"
        >
          <Typography>Precipitação</Typography>
          <Typography>{city.rain ? city.rain?.["1h"] : 0} mm/h</Typography>
        </Grid>
        <Grid
          size={{ xs: 6, sm: 4, md: 3 }}
          className="flex flex-col border-1 border-neutral-400 rounded-md justify-center items-center"
        >
          <Typography>Vento</Typography>
          <Typography>{city.wind.speed.toFixed(1)} km/h</Typography>
        </Grid>
        <Grid
          size={{ xs: 6, sm: 4, md: 3 }}
          height={100}
          className="flex flex-col border-1 border-neutral-400 rounded-md justify-center items-center"
        >
          <Typography>Nascer do Sol</Typography>
          <Typography>{convUnixToTimestamp(city.sys.sunrise)}</Typography>
        </Grid>
        <Grid
          size={{ xs: 6, sm: 4, md: 3 }}
          className="flex flex-col border-1 border-neutral-400 rounded-md justify-center items-center"
        >
          <Typography>Pôr do Sol</Typography>
          <Typography>{convUnixToTimestamp(city.sys.sunset)}</Typography>
        </Grid>
        <Grid
          size={{ xs: 6, sm: 4, md: 3 }}
          className="flex flex-col border-1 border-neutral-400 rounded-md justify-center items-center min-h-[100px]"
        >
          <Typography>Pressão</Typography>
          <Typography>{city.main.pressure} hPa</Typography>
        </Grid>
        <Grid
          size={{ xs: 6, sm: 4, md: 3 }}
          className="flex flex-col border-1 border-neutral-400 rounded-md justify-center items-center min-h-[100px]"
        >
          <Typography>Visibilidade</Typography>
          <Typography>{city.visibility / 1000} km</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeatherDetails;
