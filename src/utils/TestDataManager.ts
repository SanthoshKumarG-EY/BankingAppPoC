import { RegisterUserData } from '../models/RegisterUserData';
import  registerUserData  from '../../testdata/registerUserData.json';

export function getRegisterUserData(): RegisterUserData {
  return registerUserData.registerUserData as RegisterUserData;
}