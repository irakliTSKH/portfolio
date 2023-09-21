import { useState } from "react";
import axios from "axios";
import { CountryInfo } from "../../../../types/types";
import { Container } from "./Country.styled";

const CountryFlagComponent: React.FC = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [infos, setInfos] = useState<CountryInfo | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const fetchFlag = () => {
    axios
      .get<CountryInfo[]>(`https://restcountries.com/v2/name/${countryName}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          if (
            countryName.toLocaleLowerCase ===
            response.data[0].name.toLocaleLowerCase
          ) {
            setInfos(response.data[0]);
          }
          setCountryName("");
        } else {
          setInfos(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Container>
      <h1>Country Info</h1>
      {infos ? (
        <div>
          <h2>{infos.name}</h2>
          <h3>Capital: {infos.capital}</h3>
          <h3>Population: {infos.population}</h3>
          <img src={infos.flag} alt={`${infos.name} Flag`} />
        </div>
      ) : null}

      <input
        type="text"
        placeholder="Enter country name"
        value={countryName}
        onChange={handleInputChange}
      />
      <button onClick={fetchFlag}>Fetch Info</button>
    </Container>
  );
};

export default CountryFlagComponent;
