import axios from "@/http/axios";
import routes from "@/router";
import Vue from "vue";

export default {
  register(_, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/users", payload)
        .then((res) => {
          Vue.$toast.success("Registration successfully");
          routes.push("/login");
          resolve(res.data);
        })
        .catch((err) => {
          Vue.$toast.error("Registration error");
          reject(err.response);
        });
    });
  },
};
