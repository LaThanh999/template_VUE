import axios from "@/http/axios";
import routes from "@/router";
import _ from "lodash";
import Vue from "vue";

export default {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/auth", payload)
        .then(({ data }) => {
          commit("SET_TOKEN", {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });
          commit("SET_USER", {
            username: data.username,
            email: data.email,
          });
          routes.push("/");
          resolve(data);
        })
        .catch((err) => {
          Vue.$toast.error("Please check username or password");
          reject(err.response);
        });
    });
  },
  getMe({ commit }) {
    const data = JSON.parse(localStorage.getItem("user"));
    if (!_.isEmpty(data)) {
      commit("SET_ME", {
        username: data.username,
        email: data.email,
      });
    }
  },
  updateUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/users", payload)
        .then(({ data }) => {
          commit("SET_USER", {
            username: data.username,
            email: data.email,
          });
          routes.push("/");
          resolve(data);
        })
        .catch((err) => {
          Vue.$toast.error("Please check username or password");
          reject(err.response);
        });
    });
  },
};
