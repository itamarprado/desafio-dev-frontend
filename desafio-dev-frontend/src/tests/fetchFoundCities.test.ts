import axios from "axios";
import fetchFoundCities from "../hooks/fetchFoundCities"; // Ajuste o caminho conforme necessário
import City from "../models/City.model";

// Mock da resposta de axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchFoundCities", () => {
  let setOptions: jest.Mock;
  let setLoading: jest.Mock;

  beforeEach(() => {
    setOptions = jest.fn();
    setLoading = jest.fn();
    console.error = jest.fn();
  });

  // ##### Verificando resposta e modelagem de dados #####
  it("deve buscar as cidades corretamente e atualizar os estados", async () => {
    const cityName = "São Paulo";

    // Dados de mock da resposta da API
    const mockCities: City[] = [
      {
        name: "São Paulo",
        state: "SP",
        country: "BR",
        lat: -23.5505,
        lon: -46.6333,
      },
      {
        name: "São Paulo do Potengi",
        state: "RN",
        country: "BR",
        lat: -5.9674,
        lon: -35.2236,
      },
    ];

    // Mock da resposta da API
    mockedAxios.get.mockResolvedValueOnce({ data: mockCities });

    await fetchFoundCities({
      cityName,
      setOptions,
      setLoading,
    });

    // Verifica se o setLoading foi chamado corretamente
    expect(setLoading).toHaveBeenCalledWith(true);

    // Verifica se o setOptions foi chamado com os dados corretos
    expect(setOptions).toHaveBeenCalledWith(
      mockCities.map((city) => ({
        name: city.name,
        state: city.state,
        country: city.country,
        lat: city.lat,
        lon: city.lon,
      }))
    );

    // Verifica se o setLoading foi chamado para false após a requisição
    expect(setLoading).toHaveBeenCalledWith(false);

    // Verifica se o axios.get foi chamado corretamente
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=e59a34bff956bb38e5f5359bd04b036c`
    );
  });

  // ##### Simulando Erros na Requisição #####
  it("deve tratar erros corretamente", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Erro na requisição"));

    const cityName = "São Paulo";

    await fetchFoundCities({
      cityName,
      setOptions,
      setLoading,
    });

    // Verifica se o setLoading foi chamado corretamente
    expect(setLoading).toHaveBeenCalledWith(true);

    // Verifica se o setLoading foi chamado para false após a falha
    expect(setLoading).toHaveBeenCalledWith(false);

    // Verifica se o erro foi tratado corretamente
    expect(console.error).toHaveBeenCalledWith(
      "Erro ao buscar cidades:",
      expect.any(Error)
    );
  });
});
