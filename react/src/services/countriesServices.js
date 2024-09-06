import axios from "axios";

const baseURL = "https://restountries.com/v3.1/all";

const getAllCountries = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAllCountries };
