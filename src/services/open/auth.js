import { base_url, post } from "../http_functions";

export const authUrls = {
  login: base_url + "user/login",
  signup: base_url + "user/signup",
};

export const loginRequest = (formData) => {
  return post(authUrls.login, formData);
};

export const signupRequest = (formData) => {
  return post(authUrls.signup, formData);
};
