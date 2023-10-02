import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  timeout: 5000,
});

const apiKey = "c36894549172755979bb9bdfab24093e";

const params = {
  api_key: apiKey,
  language: "en-US",

};

const get = (url, query) =>
  instance.get(url, {
    params: {
      ...query,
      ...params,
    },
  });

export { instance as api, get };
