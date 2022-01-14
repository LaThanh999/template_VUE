import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#1565C0",
        secondary: "#839B97",
        background: "#B0BEC5",
        subBackground: "#f7f7e8",
        error: "#ef476f",
        success: "#06d6a0",
        info: "#2196f3",
        warning: "#ffd166",
        white: "#FFFFFF",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
};

Vue.use(Vuetify);

export default new Vuetify(opts);
