import { RegisterUserData } from '../models/RegisterUserData';
import fs from 'fs';
import path from 'path';
import { DataGenerator } from './DataGenerator';
import  registerUserData  from '../../testdata/registerUserData.json';
import registerUSer from '../../testdata/registerUser.json';

export class TestDataManager {
  static filePath1 = path.join(__dirname, '../../testdata/registerUserData.json');
  static filePath2 = path.join(__dirname, '../../testdata/registerUser.json');
  static readData() {
    const data = fs.readFileSync(this.filePath1, 'utf-8');
    return JSON.parse(data);
  }
  
  static saveData(data: RegisterUserData) {
    const existingData = this.readData();
    existingData.push(data);
    fs.writeFileSync(this.filePath1, JSON.stringify(existingData, null, 2), 'utf-8');
  }

  static overWriteData(data: RegisterUserData) {
    fs.writeFileSync(this.filePath2, JSON.stringify(data, null, 2), 'utf-8');
  }

  static retrieveOverWrittenData() {
    const data = fs.readFileSync(this.filePath2, 'utf-8');
    return JSON.parse(data);
  }
}