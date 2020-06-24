import { post, get, base_url } from "../http_functions";

export const searchRides = (data) => {
  return post(base_url + "ride/searchRides", data);
};
export const bookRideRequest = (data) => {
  return post(base_url + "ride/bookRide", data);
};
export const makeRideRequest = (data) => {
  return post(base_url + "ride/createRide", data);
};
export const bookedRideRequest = () => {
  return get(base_url + "ride/getBookedRides");
};
export const driverRideRequest = () => {
  return get(base_url + "ride/getDriverRides");
};
export const cancelRideRequest = (data) => {
  return post(base_url + "ride/cancelRide", data);
};
export const getAllRidesRequest = () => {
  return get(base_url + "ride/allRides");
};
