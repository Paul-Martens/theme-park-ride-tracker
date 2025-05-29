import { expect, test } from '@playwright/test';

test.describe('Rides', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/account/sign-in');

    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('test1234');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByText('Log a ride').click();
  });

  test('Renders without issues', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Rides Overview' }),
    ).toBeVisible();
  });

  test('Shows an overview of rides', async ({ page }) => {
    await expect(page.getByText('Danse Macabre')).toBeVisible();
    await expect(page.getByText('Baron 1898')).toBeVisible();
    await expect(page.getByText('Joris en de Draak')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Log Ride' })).toHaveCount(4);
    await expect(
      page.getByRole('button', { name: 'Log Ride (Rood)' }),
    ).toHaveCount(1);
    await expect(
      page.getByRole('button', { name: 'Log Ride (Blauw)' }),
    ).toHaveCount(1);
  });
});
