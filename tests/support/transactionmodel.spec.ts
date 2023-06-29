import { Page } from '@playwright/test';

class TransactionsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openTransactionsPage() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await this.page.click('xpath=//div[2]/div/div/div/button');
    await this.page.click('xpath=//select[@id="userSelect"]');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.click('xpath=//form/button');
    await this.page.click('xpath=//div[3]/button');
  }

  async setTransactionDates(startDate: string, endDate: string) {
    await this.page.fill('xpath=//input[@id="start"]', startDate);
    await this.page.waitForTimeout(1000);
    await this.page.fill('xpath=//input[@id="end"]', endDate);
    await this.page.waitForTimeout(3000);
  }

  async clickButtonMultipleTimes(times: number, delay: number) {
    const buttonXPath = 'xpath=//button[3]';
    for (let i = 0; i < times; i++) {
      await this.page.click(buttonXPath);
      await this.page.waitForTimeout(delay);
    }
  }
}

export default TransactionsPage;
