import CONSTANTS from "@/constants";

const { TOKEN } = CONSTANTS;

export default {
  SET_TOKEN(_, { accessToken, refreshToken }) {
    localStorage.setItem(TOKEN.ACCESS_TOKEN, accessToken);
    localStorage.setItem(TOKEN.REFRESH_TOKEN, refreshToken);
  },
  SET_USER({ user }, { username, email }) {
    localStorage.setItem("user", JSON.stringify({ username, email }));
    user.username = username;
    user.email = email;
  },
  SET_ME({ user }, { username, email }) {
    user.username = username;
    user.email = email;
  },
};
