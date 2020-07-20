import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  crossdomain: true,
  baseURL: 'https://office.otis.co.ua/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const userAPI = {
  async getUserKey() {
    return await instance.get('api/users/apikeys').then(res => res.data);
  },

  async login(email, password) {
    return await instance.post(`vendor/auth/login.php`, {
      'email': email,
      'password': password
    })
      .then(res => res.data)
  }
}

export const dataAPI = {
  async getUserData() {
    return instance.get( await userAPI.getUserKey().then(data => `api/users?api_key=${data}`) )
      .then(res => res.data)
  },

  async getCars() {
    return instance.get( await userAPI.getUserKey().then(data => `api/cars?api_key=${data}`) )
      .then(res => res.data)
  }
}