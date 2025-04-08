import axios from "axios";
import { WeatherResponse } from "../models/WeatherResponse.model";

interface Props {
  lat: number;
  lon: number;
  setCityData: React.Dispatch<React.SetStateAction<WeatherResponse | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const fetchCityData = async ({
  lat,
  lon,
  setCityData,
  setLoading,
}: Props): Promise<void> => {
  setLoading(true);

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e59a34bff956bb38e5f5359bd04b036c&units=metric&lang=pt_BR`
    );
    setCityData(response.data);
  } catch (error) {
    console.error("Erro ao buscar dados climáticos:", error);
  } finally {
    setLoading(false);
  }
};

export default fetchCityData;
