import { test, Page } from '@playwright/test';
import TransactionsPage from './support/transactionmodel.spec';

test('transactionsHermiona', async ({ page }: { page: Page }) => {
  const transactionsPage = new TransactionsPage(page);

  await transactionsPage.openTransactionsPage();
  await transactionsPage.setTransactionDates('2015-03-01T15:21', '2015-03-29T23:59');
  await transactionsPage.clickButtonMultipleTimes(6, 1000);
});
