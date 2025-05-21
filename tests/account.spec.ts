import { expect, test } from '@playwright/test';

test.describe.serial('Account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/account/sign-in');
  });

  test('Sign in form renders without issues', async ({ page }) => {
    await expect(page.getByLabel('Email Address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('Show an error message for invalid credentials', async ({ page }) => {
    await expect(page.getByText('Invalid login credentials')).not.toBeVisible();

    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText('Invalid login credentials')).toBeVisible();
  });

  test('Redirect to home after signing in', async ({ page }) => {
    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('test1234');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(
      page.getByRole('heading', { name: 'Theme Park Ride Tracker' }),
    ).toBeVisible();
  });
});
