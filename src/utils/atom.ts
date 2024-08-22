import {atom} from 'recoil';
import {getRandomHexCode} from './getRandomHexCode';

export const registerData = atom({
  key: 'registerData',
  default: {name: '', school: '', color: getRandomHexCode()},
});
