import { test, expect } from '../src/fixtures/BaseFixture';
import { DataGenerator } from '../src/utils/DataGenerator';
import { TestDataManager } from '../src/utils/TestDataManager';

test('Login Tests', async ({ homePage }) => {
  await homePage.navigateTo('/');
  await homePage.usernameInput.fill('john');
  await homePage.passwordInput.fill('demo');
  await homePage.loginBtn.click();
});

test('Registration Tests', async ({ homePage }) => {
  const userData = DataGenerator.generateRandomUserData();
  TestDataManager.saveData(userData);

  await homePage.navigateTo('/');
  await homePage.registerNewUser(userData);

  // Verify registration success
  await expect(homePage.regSuccessMessage).toBeVisible();
  await expect(homePage.regSuccessMessage).toHaveText('Your account was created successfully. You are now logged in.');
});


