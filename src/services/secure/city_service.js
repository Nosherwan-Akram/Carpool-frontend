import { get, base_url } from "../http_functions";

export const cityUrls = {
  getAllCities: base_url + "city/getAllCities",
};

export const getAllCities = () => {
  return get(cityUrls.getAllCities);
};
