import AsyncStorage from '@react-native-async-storage/async-storage';
// email validation
export const emailValidation = email => {
  const expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return expression.test(String(email).toLowerCase());
};

export const passwordValidation = password => {
  // var expression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,32}$/;
  //return expression.test(String(password));
  return password.length >= 6;
};

export const phoneNumberValidation = number => {
  const expression = /^\d{10}$/;
  return expression.test(number);
};
import {Alert, Platform} from 'react-native';
export const showAlert = (title, message) => {
  Alert.alert(title, message);
};

//checking object is empty or not
export const isObjectEmpty = objectName => {
  return Object.keys(objectName).length === 0;
};

//checking image size
export const checkImageSize = size => {
  let maxsize = 2 * 1024 * 1024;
  if (size < maxsize) {
    return true;
  }
};


export const showErrorMsg = () => {
  Alert.alert(
    'Warning',
    'Services arent available at the moment. Please try again after sometime or contact Admin',
  );
};

export const askStoragePermission = async () => {
  try {
    console.log('sdk version', DeviceInfo.getApiLevelSync());
    if (Platform.OS === 'android' && DeviceInfo.getApiLevelSync() < 29) {
      console.log('sdk version <= 28 ask permission');
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your internal storage',
        },
      );
      console.log('granted res', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        return true; // Add this line to return true if permission is granted
      } else {
        // Permission Denied
        //Alert.alert('Warning', 'Storage Permission Denied');
        return false; // Add this line to return false if permission is denied
      }
    } else {
      // sdk version > 29 no need to ask storage permission
      console.log('sdk version >= 29 no need to ask storage permission');
      return true; // Add this line to return true if no permission is needed
    }
  } catch (error) {
    console.log('permission error', error);
    return false; // Add this line to return false in case of an error
  }
};
//to  convert price into indian ruppe
export const formatAmount = value => {
  return value?.toLocaleString('en-IN');
};

//debounce seardh  250ms delay
export const debounce = (cb, delay = 250) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};


