import * as axios from 'axios';
import * as $ from 'jquery';
import md5 from 'js-md5';

const instance = axios.create({
  withCredentials: true,
  crossdomain: true,
  SameSite: 'None',
  baseURL: 'https://office.otis.co.ua/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export let userAPI = {
  async getUserKey() {
    return await instance.get('api/users/apikeys').then(res => res.data);
  },

  async login(email, password) {
    return await instance.get(`vendor/auth/react_auth.php?email=${email}&password=${md5(password)}`)
      .then(res => console.log(res))
    // await fetch(`https://office.otis.co.ua/vendor/auth/react_auth.php?email=${email}&password=${md5(password)}`)
    //   .then(response => console.log(response))
  },

  async putChangePassRequest(...data) {
    $.ajax({
      url: await this.getUserKey().then(res => `https://office.otis.co.ua/api/users?api_key=${res}`),
      method: 'PUT',
      contentType: "application/json",
      data: `password=${data[0]}&new=${data[1]}&repeat=${data[2]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    })
  },

  async putChangeUserData(...data) {
    $.ajax({
      url: await this.getUserKey().then(res => `https://office.otis.co.ua/api/users?api_key=${res}`),
      method: 'PUT',
      contentType: "application/json",
      dataType: 'text',
      data: `name=${data[0]}&surname=${data[1]}&birthday=${data[2]}&phone=${data[3]}&email=${data[4]}&department=${data[5]}&street=${data[6]}&web_site=${data[7]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    });
  },

  async putChangeSettingsSms(...data) {
    $.ajax({
      url: await this.getUserKey().then(res => `https://office.otis.co.ua/api/users/sms?api_key=${res}`),
      type: 'PUT',
      data: `&sms_login=${data[0]}&sms_pass=${data[1]}&sms_api_key=${data[2]}&sms_alpha_name=${data[3]}&sms_text_template=${data[4]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    });
  }
}

export const dataAPI = {
  async getUserData() {
    return instance.get(await userAPI.getUserKey().then(data => `api/users?api_key=${data}`))
      .then(res => res.data)
  },

  async getCars(page = 1) {
    return instance.get(await userAPI.getUserKey().then(data => `api/cars?api_key=${data}&page=${page}`))
      .then(res => res.data)
  },

  async getAllCars() {
    return instance.get(await userAPI.getUserKey().then(data => `api/cars?api_key=${data}`))
      .then(res => res.data)
  },

  async getCarsCount() {
    return instance.get(await userAPI.getUserKey().then(data => `api/cars?api_key=${data}&count=true`))
      .then(res => res.data)
  },

  async getChoosenCar(stateNum) {
    return instance.get(await userAPI.getUserKey().then(data => `api/cars/${stateNum}?api_key=${data}`))
      .then(res => res.data)
  },

  async getFirms() {
    return instance.get(await userAPI.getUserKey().then(data => `api/firms?api_key=${data}`))
      .then(res => res.data)
  },

  async getFirmsCount() {
    return instance.get(await userAPI.getUserKey().then(data => `api/firms?api_key=${data}`))
      .then(res => res.data.length)
  },

  async getChoosenFirm(idFirm) {
    return instance.get(await userAPI.getUserKey().then(data => `api/firms/${idFirm}?api_key=${data}`))
      .then(res => res.data)
  },

  async getCarsBrand() {
    return await instance.get(`public/lists/Models.php`)
      .then(res => res.data)
  },

  async getCarsModel(brand) {
    return await instance.get(`public/lists/Models.php?brand=${brand}`)
      .then(res => res.data)
  },

  async getCarsType(model) {
    return await instance.get(`public/lists/Models.php?model=${model}`)
      .then(res => res.data)
  },

  async postCreateCar(...data) {
    let carData = data[0] ? `&id_model=${data[0].value}` : `&brand=${data[1]}&model=${data[2]}&type=${data[3]}`;

    return await instance.post(await userAPI.getUserKey().then(res => `api/cars?api_key=${res}`), `${carData}&registration_number=${data[4]}&id_firm=${data[5]}&vin_code=${data[6]}&date_of_passing=${data[7]}&next_passing_date=${data[8]}&next_sertification_date=${data[9]}&date_of_receiving_sertificate=${data[10]}&availability_sertificate=${data[11] === true ? '1' : '0'}`)
      .then(res => res.data)
  },

  async putEditRequest(...data) {
    let carData = data[0] ? `&id_model=${data[5].value}` : `&brand=${data[4]}&model=${data[5]}&type=${data[6]}`;
    return await instance.put(await userAPI.getUserKey().then(res => `api/cars?api_key=${res}`), `&prev_rn=${data[1]}&next_rn=${data[2]}&vin_code=${data[3]}${carData}&next_passing_date=${data[7]}&next_sertification_date=${data[8]}`)
      .then(res => res.data)
  },

  // Jquery AJAX
  async postSendEmailRequest(...data) {
    $.ajax({
      url: `https://office.otis.co.ua/vendor/dispatch/email_outofdate.php`,
      type: 'POST',
      data: `department=${data[0]}&sender_email=${data[1]}&phone=${data[2]}&address=${data[3]}&web=${data[4]}&firm_name=${data[5]}&recipient=${data[6]}&registration_number=${data[7]}&car_mark=${data[8]}&car_model=${data[9]}&sertification_date=${data[10]}&passing_date=${data[11]}`,
      success(data) {
        return data;
      },
      error(data) {
        return data;
      }
    })
  },

  async postSendSmsRequest(...data) {
    console.log(data);
    $.ajax({
      url: 'https://office.otis.co.ua/vendor/dispatch/sms.php',
      type: 'POST',
      data: `login=${data[0]}&pass=${data[1]}&api_key=${data[2]}&alpha_name=${data[3]}&phone=${data[4]}&registration_number=${data[5]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    });
  },

  async deleteCarRequest(stateNum) {
    $.ajax({
      url: await userAPI.getUserKey().then(res => `https://office.otis.co.ua/api/cars?api_key=${res}`),
      type: 'DELETE',
      data: `&registration_number=${stateNum}`,
      success(data) {
        return data
      },
      error(data) {
        return data
      }
    });
  }
}


export const firmsAPI = {
  async createFirm(...data) {
    $.ajax({
      url: await userAPI.getUserKey().then(res => `https://office.otis.co.ua/api/firms?api_key=${res}`),
      method: 'POST',
      dataType: "json",
      data: `id_firm=${data[0]}&name=${data[1]}&telephone=${data[2]}&email${data[3]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    })
  },

  async putEditFirmData(...data) {
    $.ajax({
      url: await userAPI.getUserKey().then(res => `https://office.otis.co.ua/api/firms?api_key=${res}`),
      type: 'PUT',
      dataType: "json",
      contentType: "application/json",
      data: `id_firm_prev=${data[0]}&id_firm_next=${data[1]}&name=${data[2]}&telephone=${data[3]}&email=${data[4]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      },
    });
  }
}