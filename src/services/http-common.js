import axios from "axios";
import store from "../store";

const http = axios.create({
  baseURL: "http://209.172.51.58:14143/obrigacoes-api/",
});

http.interceptors.request.use(function (config) {

    const token = store.state.token;

    if (token) {
      console.log("AAAAAAAAQUI" + token)
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  erro => Promise.reject(erro)
);

export {http};
