import { RegisterUserData } from '../models/RegisterUserData';
import fs from 'fs';
import path from 'path';
import { DataGenerator } from './DataGenerator';
import  registerUserData  from '../../testdata/registerUserData.json';

export class TestDataManager {
  static filePath = path.join(__dirname, '../../testdata/registerUserData.json');
  static readData() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }
  
  static saveData(data: RegisterUserData) {
    const existingData = this.readData();
    existingData.push(data);
    fs.writeFileSync(this.filePath, JSON.stringify(existingData, null, 2), 'utf-8');
  }
}