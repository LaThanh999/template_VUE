import axios from "@/http/axios";

export default {
  getAllPost({ commit }, payload) {
    const { type, page, limit } = payload;
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/posts?type=${type}&page=${page}&limit=${limit}`)
        .then(({ data: dataResult }) => {
          const { data } = dataResult;
          resolve(dataResult);
          commit("SET_POST", data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  getPostById(_, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/posts/${payload}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  addPost(_, payload) {
    return new Promise((resolve, reject) => {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      payload.image.forEach((el) => {
        formData.append("image", el);
      });
      delete payload.image;
      Object.keys(payload).forEach((el) => {
        formData.append(el, payload[el]);
      });
      axios
        .post(`/api/posts`, formData, config)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
};
