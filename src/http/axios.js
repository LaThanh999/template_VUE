import axios from "axios";
import CONSTANTS from "@/constants";
import router from "@/router";

const { TOKEN } = CONSTANTS;
//const baseURL = "http://localhost:3000";
const baseURL = "https://staging-quanlynha.herokuapp.com/";

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);
  if (accessToken) {
    config.headers["Authorization"] = "Bearer " + accessToken;
  }
  return config;
});

const ignoreApis = ["/api/auth/refreshToken"];
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      ignoreApis.includes(originalRequest.path)
    ) {
      const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);
      const refreshToken = localStorage.getItem(TOKEN.REFRESH_TOKEN);
      instance
        .post("/api/auth/refreshToken", {
          accessToken,
          refreshToken,
        })
        .then(({ data }) => {
          const newAccessToken = data.accessToken;
          localStorage.set(TOKEN.ACCESS_TOKEN, newAccessToken);
          instance.config.headers["Authorization"] = "Bearer " + accessToken;
          return instance(originalRequest);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            localStorage.removeItem(TOKEN.ACCESS_TOKEN);
            localStorage.removeItem(TOKEN.REFRESH_TOKEN);
            router.push("/login");
          }
        });
    }
    return Promise.reject(error);
  }
);

export default instance;
