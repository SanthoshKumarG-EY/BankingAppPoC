import { test, expect } from '../src/fixtures/BaseFixture';
import { DataGenerator } from '../src/utils/DataGenerator';
import { TestDataManager } from '../src/utils/TestDataManager';


test('Registration Tests', async ({ homePage }) => {
  const userData = DataGenerator.generateRandomUserData();
  TestDataManager.saveData(userData);
  const updatedUserData = TestDataManager.retrieveOverWrittenData();

  await homePage.navigateTo('/');
  await homePage.registerNewUser(userData);
  console.log(updatedUserData.username);

  // Verify registration success
  await expect(homePage.regSuccessMessage).toBeVisible();
  await expect(homePage.regSuccessMessage).toHaveText('Your account was created successfully. You are now logged in.');

});


