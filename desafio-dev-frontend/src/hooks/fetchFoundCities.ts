import axios from "axios";
import City from "../models/City.model";

interface Props {
  cityName: string;
  setOptions: React.Dispatch<React.SetStateAction<readonly City[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Return a Promise
const fetchFoundCities = async ({
  cityName,
  setOptions,
  setLoading,
}: Props): Promise<void> => {
  setLoading(true);

  try {
    // Requisição para buscar cidades com base no nome
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=e59a34bff956bb38e5f5359bd04b036c`
    );

    // Formata a resposta para garantir que obtenha somente os campos necessários
    const cities = response.data.map((city: City) => ({
      name: city.name,
      state: city.state,
      country: city.country,
      lat: city.lat,
      lon: city.lon,
    }));

    setOptions(cities);
  } catch (error) {
    console.error("Erro ao buscar cidades:", error);
  } finally {
    setLoading(false);
  }
};

export default fetchFoundCities;
