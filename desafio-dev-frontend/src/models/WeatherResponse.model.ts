interface Coord {
  lon: number; // Longitude
  lat: number; // Latitude
}

interface Weather {
  id: number; // ID da condição climática
  main: string; // Grupo de parâmetros do clima (ex: "Rain", "Snow")
  description: string; // Descrição do clima
  icon: string; // ID do ícone do clima
}

interface Main {
  temp: number; // Temperatura em Celsius
  feels_like: number; // Temperatura "sensação", em Kelvin
  pressure: number; // Pressão atmosférica em hPa
  humidity: number; // Umidade relativa, em porcentagem
  temp_min: number; // Temperatura mínima atual
  temp_max: number; // Temperatura máxima atual
  sea_level: number; // Pressão atmosférica ao nível do mar em hPa
  grnd_level: number; // Pressão atmosférica ao nível do solo em hPa
}

interface Wind {
  speed: number; // Velocidade do vento (em m/s ou mph, dependendo da configuração)
  deg: number; // Direção do vento, em graus
}

interface Clouds {
  all: number; // Cobertura de nuvens, em porcentagem
}

interface Precipitation {
  "1h"?: number; // Precipitação em mm/h
}

interface Sys {
  type: number; // Tipo interno
  id: number; // ID interno
  country: string; // Código do país (ex: "GB", "JP")
  sunrise: number; // Hora do nascer do sol (unix timestamp)
  sunset: number; // Hora do pôr do sol (unix timestamp)
}

export interface WeatherResponse {
  coord: Coord; // Coordenadas da cidade
  weather: Weather[]; // Informações sobre o clima
  base: string; // Parâmetro interno
  main: Main; // Informações principais (temperatura, pressão, etc.)
  visibility: number; // Visibilidade em metros
  wind: Wind; // Informações sobre o vento
  clouds: Clouds; // Informações sobre a cobertura de nuvens
  rain?: Precipitation; // Informações sobre precipitação de chuva
  snow?: Precipitation; // Informações sobre precipitação de neve
  dt: number; // Hora da atualização dos dados (unix timestamp)
  sys: Sys; // Informações sobre o sistema (como país, nascer e pôr do sol)
  timezone: number; // Fuso horário em segundos em relação ao UTC
  id: number; // ID da cidade
  name: string; // Nome da cidade
  cod: number; // Código interno da API
}
