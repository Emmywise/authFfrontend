/*eslint-disable */
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';
const state = {
  token: localStorage.getItem('token') || null,
};

const getters = {
  loggedIn(state) {
    return state.token != null;
  },
  token(state) {
    return state.token;
  },
};

const mutations = {
  login(state, token) {
    state.token = token;
  },
  logout(state) {
    state.token = null;
  },
};

const actions = {
  login(context, credentials) {
    delete axios.defaults.headers.common.Authorization;
    return new Promise((resolve, reject) => {
      axios
        .post('user-login/', {
          email: credentials.email,
          password: credentials.password
        })
        .then((response) => {
          const token = response.data.access_token;
          const user = JSON.stringify({
            username: response.data.username,
            email: response.data.email
          });
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          context.commit('login', token);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  logout(context) {
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios
          .post('user-logout/', {
            refresh: localStorage.getItem('token')
          })
          .then((response) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            context.commit('logout');
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            context.commit('logout');
            //window.location = 'login';
            reject(error);
          });
      });
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
