import axios from "axios";
import fetchCityData from "../hooks/fetchCityData"; // Ajuste o caminho conforme necessário
import { WeatherResponse } from "../models/WeatherResponse.model";

// Mock da resposta de axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchCityData", () => {
  let setCityData: jest.Mock;
  let setLoading: jest.Mock;

  beforeEach(() => {
    setCityData = jest.fn();
    setLoading = jest.fn();
    console.error = jest.fn();
  });

  // ##### Verificando resposta e modelagem de dados #####
  it("deve definir setLoading para true, buscar os dados da cidade e setar o estado corretamente", async () => {
    // Dados de mock da resposta da API
    const mockCityData: WeatherResponse = {
      coord: { lon: -42.1, lat: -22.83 },
      weather: [
        {
          id: 300,
          main: "Drizzle",
          description: "light intensity drizzle",
          icon: "09d",
        },
      ],
      base: "stations",
      main: {
        temp: 22.01,
        feels_like: 22.56,
        temp_min: 22.01,
        temp_max: 22.95,
        pressure: 1019,
        humidity: 88,
        sea_level: 1019,
        grnd_level: 1018,
      },
      visibility: 10000,
      wind: { speed: 2.06, deg: 140 },
      clouds: { all: 75 },
      dt: 1744111870,
      sys: {
        type: 1,
        id: 8343,
        country: "BR",
        sunrise: 1744102724,
        sunset: 1744144874,
      },
      timezone: -10800,
      id: 3448351,
      name: "São Pedro da Aldeia",
      cod: 200,
    };

    // Resposta para a requisição de dados da cidade
    mockedAxios.get.mockResolvedValueOnce({ data: mockCityData });

    const lat = 23.5505; // Exemplo de latitude
    const lon = -46.6333; // Exemplo de longitude

    await fetchCityData({
      lat,
      lon,
      setCityData,
      setLoading,
    });

    // Verificar se o setLoading foi chamado corretamente
    expect(setLoading).toHaveBeenCalledWith(true);

    // Verificar se o setCityData foi chamado com os dados corretos da cidade
    expect(setCityData).toHaveBeenCalledWith(mockCityData);

    // Verificar se o setLoading foi chamado para false após a chamada da API
    expect(setLoading).toHaveBeenCalledWith(false);

    // Verificar se o axios.get foi chamado corretamente
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e59a34bff956bb38e5f5359bd04b036c&units=metric&lang=pt_BR`
    );
  });

  // ##### Simulando Erros na Requisição #####
  it("deve tratar erros corretamente", async () => {
    // Mock para gerar erro nas requisições
    mockedAxios.get.mockRejectedValueOnce(new Error("Erro na requisição"));

    const lat = 23.5505;
    const lon = -46.6333;

    await fetchCityData({
      lat,
      lon,
      setCityData,
      setLoading,
    });

    // Verificar se o setLoading foi chamado corretamente
    expect(setLoading).toHaveBeenCalledWith(true);

    // Verificar se o setLoading foi chamado para false após a falha
    expect(setLoading).toHaveBeenCalledWith(false);

    // Verificar se o erro foi tratado
    expect(console.error).toHaveBeenCalledWith(
      "Erro ao buscar dados climáticos:",
      expect.any(Error)
    );
  });
});
