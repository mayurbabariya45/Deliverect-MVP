import axios from "axios";

const API_URL = "http://localhost:8000/";

const getHeader = (ContentType = "application/json") => {
  return {
    headers: {
      "Content-Type": ContentType,
    },
  };
};

export const getAllLinkedAccount = (filter) => {
  const url = API_URL + "/";
  return axios
    .get(url, getHeader())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
