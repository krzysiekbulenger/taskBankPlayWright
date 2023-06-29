// LoginPage.ts
class LoginPage {
    page: any;
    constructor(page: any) {
      this.page = page;
    }
  
    async open() {
      await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }
  
    async clickManagerButton() {
      await this.page.click('xpath=//div[2]/button');
    }
  
    async clickOpenAccountButton() {
      await this.page.click('xpath=//div[2]/div/div/button');
    }
  
    async enterFirstName(firstName) {
      await this.page.fill('xpath=//input[@type="text"]', firstName);
    }
  
    async enterLastName(lastName) {
      await this.page.fill('xpath=//div[2]/input', lastName);
    }
  
    async enterPostalCode(postalCode) {
      await this.page.fill('xpath=(//input[@type="text"])[3]', postalCode);
    }
  
    async clickAddCustomerButton() {
      await this.page.click('xpath=//div[2]/div');
    }
  
    async clickOpenAccountButton1() {
      await this.page.click('xpath=//form/button');
    }
  }
  
  // HomePage.ts
  class HomePage {
    page: any;
    constructor(page: any) {
      this.page = page;
    }
  
    async getWelcomeMessage() {
      return await this.page.innerText('xpath=.welcome-message');
    }
  
    async clickOpenAccountButton() {
      await this.page.click('xpath=//div/div[2]/div/div/button[2]');
    }
  
    async selectUser() {
      await this.page.click('xpath=//select[@id="userSelect"]');
      for (let i = 0; i < 6; i++) {
        await this.page.keyboard.press('ArrowDown');
      }
      await this.page.keyboard.press('Enter');
    }
  
    async selectCurrency() {
      await this.page.click('xpath=//select[@id="currency"]');
      await this.page.keyboard.press('ArrowDown');
      await this.page.keyboard.press('Enter');
    }
  
    async clickProcessButton() {
      await this.page.click('xpath=//form/button');
    }
  }
  
  // Test.ts
  class Test {
    page: any;
    loginPage: LoginPage;
    homePage: HomePage;
    constructor(page: Page) {
      this.page = page;
      this.loginPage = new LoginPage(page);
      this.homePage = new HomePage(page);
    }
  
    async poundAccount() {
      await this.loginPage.open();
      await this.loginPage.clickManagerButton();
      await this.loginPage.clickOpenAccountButton();
      await this.loginPage.enterFirstName('Jan');
      await this.loginPage.enterLastName('Dzban');
      await this.loginPage.enterPostalCode('98-220');
      await this.loginPage.clickAddCustomerButton();
      await this.loginPage.clickOpenAccountButton1();
  
      await this.homePage.clickOpenAccountButton();
      await this.homePage.selectUser();
      await this.homePage.selectCurrency();
      await this.homePage.clickProcessButton();
    }
  
    async dollarPoundAccount() {
      await this.loginPage.open();
      await this.loginPage.clickManagerButton();
      await this.loginPage.clickOpenAccountButton();
      await this.loginPage.enterFirstName('Grazyna');
      await this.loginPage.enterLastName('Sprezyna');
      await this.loginPage.enterPostalCode('98-220');
      await this.loginPage.clickAddCustomerButton();
      await this.loginPage.clickOpenAccountButton1();
  
      await this.homePage.clickOpenAccountButton();
      await this.homePage.selectUser();
      await this.homePage.selectCurrency();
      await this.homePage.clickProcessButton();
  
      await this.homePage.clickOpenAccountButton();
      await this.homePage.selectUser();
      await this.homePage.selectCurrency();
      await this.homePage.clickProcessButton();
    }
  }
  
  // PlaywrightTest.ts
  import { test, expect, Page } from '@playwright/test';
  
  test.describe.configure({ mode: 'parallel' });
  
  test('pound account', async ({ page }) => {
    const test = new Test(page);
    await test.poundAccount();
  });
  
  test('dollar&pound account', async ({ page }) => {
    const test = new Test(page);
    await test.dollarPoundAccount();
  });
  