import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import City from "../models/City.model";
import { WeatherResponse } from "../models/WeatherResponse.model";
import fetchCities from "../hooks/fetchFoundCities"; // Adjusted import
import fetchCityData from "../hooks/fetchCityData";

interface Props {
  setCityData: React.Dispatch<React.SetStateAction<WeatherResponse | null>>;
}

const SearchBar: React.FC<Props> = ({ setCityData }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly City[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  // Função chamada ao digitar no campo de pesquisa
  const handleInputChange = (
    event: React.SyntheticEvent,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    // Fetch city data when user types
    if (newInputValue.trim() !== "") {
      fetchCities({
        cityName: newInputValue,
        setOptions: setOptions,
        setLoading: setLoading,
      });
    }
  };

  // Função chamada ao selecionar uma cidade
  const handleCitySelect = (
    event: React.SyntheticEvent,
    value: City | null
  ) => {
    if (value) {
      fetchCityData({
        lat: value.lat,
        lon: value.lon,
        setCityData: setCityData,
        setLoading: setLoading,
      });
    }
  };

  return (
    <Autocomplete
      filterOptions={(x) => x}
      sx={{ width: 300 }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      noOptionsText="Opção não encontrada"
      onInputChange={handleInputChange} // Calls on input change
      onChange={handleCitySelect} // Calls on city selection
      inputValue={inputValue}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) =>
        `${option.name}, ${option.state}, ${option.country}`
      } // Format of city options shown
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Insira uma cidade"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
};

export default SearchBar;
