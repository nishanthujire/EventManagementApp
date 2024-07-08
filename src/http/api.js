import axios from 'axios';
import {baseUrl} from './apiConfig';

import AsyncStorage from '@react-native-async-storage/async-storage';
// Default headers
export const getHeaders = async () => {
  try {
    let userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      return {
        authorization: userToken,
        'Content-Type': 'application/json',
      };
    } else {
      return {};
    }
  } catch {
    console.log('error while getting auth token');
  }
};

// Network API function
const networkApi = async (
  endpoint,
  method,
  data = null,
  customHeaders = {},
) => {
  console.log('custom api called');
  console.log('endpoint', endpoint);
  console.log('method', method);
  console.log('data', data);

  const defaultHeaders = await getHeaders();

  let headers = {...defaultHeaders, ...customHeaders};

  let config = {
    url: `${baseUrl}${endpoint}`,
    method,
    headers,
  };
  if (data) {
    config = {...config, data};
    console.log('config is', config);
  }
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default networkApi;
