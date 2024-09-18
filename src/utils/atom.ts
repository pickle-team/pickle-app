import {atom} from 'recoil';
import {getRandomHexCode} from './getRandomHexCode';

export const registerData = atom({
  key: 'registerData',
  default: {name: '', school: '', sex: 'male', color: getRandomHexCode()},
});

export const registerAlert = atom({
  key: 'registerAlert',
  default: false,
});

export const homeMenuSetHome = atom({
  key: 'homeMenuSetHome',
  default: true,
});
