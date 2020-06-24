import { getToken } from "./authentication";
import store from "../redux/store";
import { resetUser } from "../redux/slices/user-slice";

export const post = async (url, body) => {
  let token = getToken();
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
      authorization: token,
    },
  });
  let data = await response.json();
  //   .then((resp) => resp.json())
  //   .then((res) => {
  //     console.log(res);
  //     finalResponse = res;
  //   })
  //   .catch((error) => console.log(error + "wth"));
  // console.log(finalResponse);
  return data;
};

export const get = async (url) => {
  let token = getToken();
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: token,
    },
  });
  let data = await response.json();
  return data;
};

export const base_url = "http://localhost:5000/";
