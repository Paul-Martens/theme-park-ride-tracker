import { expect, test } from '@playwright/test';

import { deleteAllUsers } from './helpers/supabase';

test.describe.serial('Account', () => {
  test.beforeAll(async () => {
    deleteAllUsers();
  });

  test.afterAll(async () => {
    deleteAllUsers();
  });

  test('Sign Up form renders without issues', async ({ page }) => {
    await page.goto('/account/sign-up');

    await expect(page.getByLabel('Email Address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('Sign In form renders without issues', async ({ page }) => {
    await page.goto('/account/sign-in');

    await expect(page.getByLabel('Email Address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('Show an error message for signing in with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/account/sign-in');

    await expect(page.getByText('Invalid login credentials')).not.toBeVisible();

    // These are the credentials we'll use when signing up.
    // At this point, the account does not exist.
    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('test1234');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText('Invalid login credentials')).toBeVisible();
  });

  test('Show a message after signing up', async ({ page }) => {
    await page.goto('/account/sign-up');

    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('test1234');
    await page.getByRole('button', { name: 'Sign Up' }).click();

    await expect(
      page.getByText(
        'Thank you for signing up. Please check your email to activate your account.',
      ),
    ).toBeVisible();
  });

  test('Show an error message when trying to sign up an existing account', async ({
    page,
  }) => {
    await page.goto('/account/sign-up');

    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('test1234');
    await page.getByRole('button', { name: 'Sign Up' }).click();

    await expect(page.getByText('User already registered')).toBeVisible();
  });

  test('Redirect to home after signing in', async ({ page }) => {
    await page.goto('/account/sign-in');

    await page.getByLabel('Email Address').fill('test@goonie.nl');
    await page.getByLabel('Password').fill('test1234');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(
      page.getByRole('heading', { name: 'Theme Park Ride Tracker' }),
    ).toBeVisible();
  });
});
