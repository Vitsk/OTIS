import * as axios from 'axios';
import * as $ from 'jquery';
import md5 from 'js-md5';

const instance = axios.create({
  // withCredentials: true,
  // baseURL: "https://office.otis.co.ua/",
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  },
});

const ajaxUrl = '' // https://office.otis.co.ua/;

// let apiKey = '';

// export const getApiKey = async () => {
//   return await instance.get('api/users/apikeys').then(res => apiKey = res.data);
// }

export let userAPI = {
  async getUserKey() {
    return await instance.get(`api/users/apikeys`).then(res => res.data);
  },

  async login(email, password) {
    return await instance.get(`${ajaxUrl}vendor/auth/react_auth.php?email=${email}&password=${md5(password)}`)
  },

  async logoutRequest() {
    return await instance.get(`${ajaxUrl}vendor/auth/exit.php`)
      .then(res => res)
  },

  async putChangePassRequest(...data) {
    return $.ajax({
      url: await this.getUserKey().then(res => `${ajaxUrl}api/users?api_key=${res}`),
      // url: `${ajaxUrl}api/users?api_key=${apiKey}`,
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
    return $.ajax({
      url: await this.getUserKey().then(res => `${ajaxUrl}api/users?api_key=${res}`),
      // url: `${ajaxUrl}api/users?api_key=${apiKey}`,
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
    return $.ajax({
      url: await this.getUserKey().then(res => `${ajaxUrl}api/users/sms?api_key=${res}`),
      // url: `${ajaxUrl}api/users/sms?api_key=${apiKey}`,
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
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/users?api_key=${apiKey}`))
      .then(res => res.data)
  },

  async getCars(page = 1) {
    
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/cars?api_key=${apiKey}&page=${page}`)) 
      .then(res => res.data)
  },

  async getAllCars() {
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/cars?api_key=${apiKey}`)) 
      .then(res => res.data)
  },

  async getCarsCount() {
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/cars?api_key=${apiKey}&count=true`))
      .then(res => res.data)
  },

  async getChoosenCar(stateNum) {
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/cars/${stateNum}?api_key=${apiKey}`))
      .then(res => res.data)
  },

  async getFirms() {
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/firms?api_key=${apiKey}`)) 
      .then(res => res.data)
  },

  async getFirmsCount() {
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/firms?api_key=${apiKey}`)) 
      .then(res => res.data.length)
  },

  async getChoosenFirm(idFirm) {
    return instance.get(await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/firms/${idFirm}?api_key=${apiKey}`)) 
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
    let url = await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/cars?api_key=${apiKey}`);
    // let carData = data[0] ? `id_model` `${data[0].value}` : `&brand=${data[1]}&model=${data[2]}&type=${data[3]}`;
    
    let formData = new FormData();
    formData.append('id_model', `${data[0] ? data[2].value : null}`)
    formData.append('brand', `${data[0] ? null : data[1]}`)
    formData.append('model', `${data[0] ? null : data[2]}`)
    formData.append('type', `${data[0] ? null : data[3]}`)
    formData.append('registration_number', `${data[4]}`)
    formData.append('id_firm', `${data[5]}`)
    formData.append('vin_code', `${data[6]}`)
    formData.append('date_of_passing', `${data[7]}`)
    formData.append('next_passing_date', `${data[8]}`)
    formData.append('next_sertification_date', `${data[9]}`)
    formData.append('date_of_receiving_sertificate', `${data[10]}`)
    formData.append('availability_sertificate', `${data[11] === true ? '1' : '0'}`)
    
    return await fetch(url, {
      method: 'POST',
      body: formData
    })

    // return await instance.post(await userAPI.getUserKey().then(res => `api/cars?api_key=${res}`), `${carData}&registration_number=${data[4]}&id_firm=${data[5]}&vin_code=${data[6]}&date_of_passing=${data[7]}&next_passing_date=${data[8]}&next_sertification_date=${data[9]}&date_of_receiving_sertificate=${data[10]}&availability_sertificate=${data[11] === true ? '1' : '0'}`)
    //   .then(res => res.data)
  },

  async putEditRequest(...data) {
    let carData = data[0] ? `&id_model=${data[5].value}` : `&brand=${data[4]}&model=${data[5]}&type=${data[6]}`;
    return instance.put(await userAPI.getUserKey().then(apiKey => `api/cars?api_key=${apiKey}`), `&prev_rn=${data[1]}&next_rn=${data[2]}&vin_code=${data[3]}${carData}&next_passing_date=${data[7]}&next_sertification_date=${data[8]}&date_of_passing=${data[9]}&date_of_receiving_sertificate=${data[10]}`)
  },
  
  // Jquery AJAX
  async postSendEmailRequest(...data) {
    return $.ajax({
      url: `${ajaxUrl}vendor/dispatch/email_outofdate.php`,
      type: 'POST',
      data: `department=${data[0]}&sender_email=${data[1]}&phone=${data[2]}&address=${data[3]}&web=${data[4]}&firm_name=${data[5]}&recipient=${data[6]}&registration_number=${data[7]}&car_mark=${data[8]}&car_model=${data[9]}&sertification_date=${data[10]}&passing_date=${data[11]}`,
      success(data) {
        console.log(data);
      },
      error(data) {
        console.log(data);
      }
    })
  },

  async postSendSmsRequest(...data) {
    return $.ajax({
      url: `${ajaxUrl}vendor/dispatch/sms.php`,
      type: 'POST',
      data: await userAPI.getUserKey().then(apiKey => `login=${data[0]}&pass=${data[1]}&api_key=${apiKey}&alpha_name=${data[3]}&phone=${data[4]}&registration_number=${data[5]}&template=${data[6]}`),
      // data: `login=${data[0]}&pass=${data[1]}&api_key=${apiKey}&alpha_name=${data[3]}&phone=${data[4]}&registration_number=${data[5]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    });
  },

  async deleteCarRequest(stateNum) {
    return $.ajax({
      url: await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/cars?api_key=${apiKey}`),
      type: 'DELETE',
      data: `&registration_number=${stateNum}`,
      success(data) {
         console.log(data)
      },
      error(data) {
         console.log(data)
      }
    });
  }
}


export const firmsAPI = {
  async createFirm(...data) {
    return $.ajax({
      url: await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/firms?api_key=${apiKey}`),
      method: 'POST',
      dataType: "json",
      data: `id_firm=${data[0]}&name=${data[1]}&telephone=${data[2]}&email=${data[3]}`,
      success(res) {
        console.log(res);
      },
      error(res) {
        console.log(res);
      }
    })
  },

  async putEditFirmData(...data) {
    return $.ajax({
      url: await userAPI.getUserKey().then(apiKey => `${ajaxUrl}api/firms?api_key=${apiKey}`),
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