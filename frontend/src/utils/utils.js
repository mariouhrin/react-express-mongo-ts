import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import config from '../config';

/**
 * helper function which return axios client request
 */
export async function axiosHandler(method, url, data = undefined) {
  axios.defaults.baseURL = config.backedAPI;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  try {
    const options = {
      method,
      url
    };
    if (!isEmpty(data)) {
      options.data = data;
    }
    const response = await axios(options);
    return response;
  } catch (err) {
    throw err;
  }
}
