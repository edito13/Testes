import React, { useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { SingleValue } from "react-select";
import { SelectContainer } from "../style";

const SelectCountry = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();

  useEffect(() => {
    // Faça uma solicitação à API para obter a lista de países
    const getCountriesInfo = async () => {
      const response = await axios.get<Country[]>(
        "https://restcountries.com/v3.1/all"
      );
      const data = response.data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(data.sort());
    };
    getCountriesInfo();
  }, []);

  const handleCountryChange = (
    selectedOption: SingleValue<{ value: string; label: ReactNode }>
  ) => {
    if (selectedOption) {
      const selectedValue = selectedOption as {
        value: string;
        label: ReactNode;
      };
      const selectedCountry = countries.find(
        (country) => country.cca2 === selectedValue.value
      );
      setSelectedCountry(selectedCountry);
    }
  };

  const options = countries.map((country) => ({
    value: country.cca2,
    label: (
      <div>
        <img
          src={country.flags.png}
          alt={`Bandeira de ${country.name.common}`}
          style={{ marginRight: "8px", width: "24px" }}
        />
        {country.name.common}
      </div>
    ),
  }));

  return (
    <div>
      <SelectContainer
        options={options}
        onChange={handleCountryChange}
        placeholder="Selecione um país"
      />
      {selectedCountry && (
        <div>
          <h2>{selectedCountry?.name.common}</h2>
          <img
            src={selectedCountry?.flags.png}
            alt={`Bandeira de ${selectedCountry?.name.common}`}
          />
          <p>Código do idioma: {selectedCountry?.cca2}</p>
        </div>
      )}
    </div>
  );
};

export default SelectCountry;
