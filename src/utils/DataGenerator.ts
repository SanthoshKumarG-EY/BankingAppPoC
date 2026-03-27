import { RegisterUserData } from "../models/RegisterUserData";

export class DataGenerator {
  static generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

    static generateRandomEmail(): string {  
    const domains = ['example.com', 'test.com', 'demo.com'];
    const randomString = this.generateRandomString(10);
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${randomString}@${randomDomain}`;
  }

    static generateRandomPassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  static generateRandomNumericString(length: number): string {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }   
    return result;
  }

  static generateRandomUserData(): RegisterUserData {
    return {
      firstName: this.generateRandomString(8),
      lastName: this.generateRandomString(8),
      address: `${this.generateRandomString(5)} Main St`,
      city: this.generateRandomString(6),
      state: 'CA',
      zipCode: this.generateRandomString(5),
      phone: this.generateRandomNumericString(10),
      ssn: this.generateRandomNumericString(9),
      username: this.generateRandomString(10),
      password: this.generateRandomPassword(12)
    };
  } 

} 
